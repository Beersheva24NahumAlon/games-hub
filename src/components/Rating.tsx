import { HStack } from '@chakra-ui/react';
import React, { ReactNode, useMemo } from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface Props {
    rate: number;
    starsNumber?: number;
    maxRating?: number;
}

interface StarsCounts {
    solid: number;
    half: number;
    empty: number;
}

function getStarsCounts({ rate, starsNumber = 5, maxRating = 5 }: Props): StarsCounts {
    const normRating = starsNumber * rate / maxRating;
    let solid = Math.floor(normRating);
    const fractional = normRating - solid;
    let half = 0;
    if (fractional > 0.25) {
        if (fractional < 0.75) {
            half = 1;
        } else {
            solid++;
        }
    }
    const empty = starsNumber - solid - half;
    return { solid, half, empty };
}

function getArrayReactNode({ solid, half, empty }: StarsCounts): ReactNode[] {
    let key = 0;
    const arr: ReactNode[] = Array.from({ length: solid }).map(() => <FaStar key={key++} />);
    half == 1 && arr.push(<FaStarHalfAlt key={key++} />);
    Array.from({ length: empty }).forEach(() => arr.push(<FaRegStar key={key++} />));
    return arr;
}

const Rating: React.FC<Props> = (props) => {
    const starsCounts = useMemo(() => getStarsCounts(props), []);
    const starsNodes = useMemo(() => getArrayReactNode(starsCounts), []);
    return (
        <HStack title={props.rate.toString()}>
            {starsNodes}
        </HStack>
    );
}

export default Rating;