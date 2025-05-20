import { Badge, Card, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../model/fetch-game-types'

interface Props {
    game: Game;
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
                <Badge colorPalette={game.metacritic > 90 ? "green" : "gray"} variant="solid">{game.metacritic}</Badge>
                {game.parent_platforms.map(p => <Text textStyle="xs">{p.platform.slug}</Text>)}
            </Card.Footer>
        </Card.Root>
    )
}

export default GameCard