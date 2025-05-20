import { Badge, Card, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../model/fetch-game-types'

interface Props {
    game: Game;
}

function getColors(metacritic: number): {bg: string, color: string} {
    return metacritic > 90 ? {bg: "green", color: "white"} : {bg: "lightgray", color: "initial"};
}

const GameCard: React.FC<Props> = ({ game }) => {
    return (
        <Card.Root maxW="sm" overflow="hidden">
            <Image
                src={game.background_image}
                alt={`image of ${game.name}`}
                objectFit="cover"
                height="100%"
            />
            <Card.Body gap="2">
                <Card.Title>{game.name}</Card.Title>
            </Card.Body>
            <Card.Footer gap="2" flexWrap="wrap">
                <HStack justifyContent="space-between" width="100%">
                    <Text textStyle="xs">{game.parent_platforms.map(p => p.platform.name).join(", ")}</Text>
                    <Badge {...getColors(game.metacritic)} variant="solid">{game.metacritic}</Badge>
                </HStack>
            </Card.Footer>
        </Card.Root>
    )
}

export default GameCard