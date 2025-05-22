import { HStack } from '@chakra-ui/react';
import React, { ReactNode, useMemo } from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface Props {
    rate: number;
    starsNumber?: number;
    maxRate?: number;
}

interface StarsCounts {
    solid: number;
    half: number;
    empty: number;
}

function getStarsCounts({ rate, starsNumber, maxRate }: Props): StarsCounts {
    const normalizeRating = starsNumber! * rate / maxRate!;
    let solid = Math.floor(normalizeRating);
    const fractional = normalizeRating - solid;
    let half = 0;
    if (fractional > 0.25) {
        if (fractional < 0.75) {
            half = 1;
        } else {
            solid++;
        }
    }
    const empty = starsNumber! - solid - half;
    return { solid, half, empty };
}

function getArrayReactNode({ solid, half, empty }: StarsCounts): ReactNode[] {
    let key = 0;
    const arr: ReactNode[] = [];
    Array.from({ length: solid }).forEach(() => arr.push(<FaStar key={key++} />));
    half == 1 && arr.push(<FaStarHalfAlt key={key++} />);
    Array.from({ length: empty }).forEach(() => arr.push(<FaRegStar key={key++} />));
    return arr;
}

const Rating: React.FC<Props> = ({ rate, starsNumber = 5, maxRate = 5 }: Props) => {
    const starsCounts = useMemo(() => getStarsCounts({ rate, starsNumber, maxRate}), [rate, starsNumber, maxRate]);
    const starsNodes = getArrayReactNode(starsCounts);
    return (
        <HStack title={`${rate} of ${maxRate}`}>
            {starsNodes}
        </HStack>
    );
}

export default Rating;