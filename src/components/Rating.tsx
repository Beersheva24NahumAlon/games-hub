import { HStack } from '@chakra-ui/react';
import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt} from 'react-icons/fa';

const STARS = 5;
interface Props {
    rating: number;
}

function getStars(rating: number): { solid: number, half: number, empty: number } {
    let solid = Math.floor(rating);
    const fractional = rating - solid;
    let half = 0;
    if (fractional > 0.25) {
        if (fractional < 0.75) {
            half = 1;
        } else {
            solid++;
        }
    }
    const empty = STARS - solid - half;
    return { solid, half, empty };
}

const Rating: React.FC<Props> = ({ rating }) => {
    const { solid, half, empty } = getStars(rating);
    return (
        <HStack> 
            {Array.from({length: solid}).map(() => <FaStar />)}
            {half == 1 && <FaStarHalfAlt/>}
            {Array.from({length: empty}).map(() => <FaRegStar />)}
        </HStack>
    );
}

export default Rating;