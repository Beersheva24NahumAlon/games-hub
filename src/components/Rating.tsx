import { HStack } from '@chakra-ui/react';
import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt} from 'react-icons/fa';

interface Props {
    starsNumber?: number;
    rate: number;
    maxRating?: number;
}

function getStars(rate: number, starsNumber: number = 5,  maxRating: number = 5): { solid: number, half: number, empty: number } {
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

const Rating: React.FC<Props> = ({ starsNumber, rate, maxRating }) => {
    const { solid, half, empty } = getStars(rate, starsNumber, maxRating);
    return (
        <HStack title={rate.toString()}> 
            {Array.from({length: solid}).map(() => <FaStar />)}
            {half == 1 && <FaStarHalfAlt/>}
            {Array.from({length: empty}).map(() => <FaRegStar />)}
        </HStack>
    );
}

export default Rating;