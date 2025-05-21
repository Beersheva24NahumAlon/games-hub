
import React, { ReactNode } from 'react'
import { SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import GameCard from './GameCard';
import useGames from '../hooks/useGames';

const GameGrid: React.FC = () => {

    const { data: games, errorMsg, isLoading } = useGames();
    let res: ReactNode = <Spinner></Spinner>;

    if (!isLoading) {
        res = (
            <>{
                errorMsg ?
                    <Text color="red">{errorMsg}</Text> :
                    <SimpleGrid
                        gap="5"
                        maxHeight="85vh"
                        overflow="auto"
                        marginTop="2vh"
                        columns={{ base: 1, sm: 2, md: 3 }}
                        paddingX="5"
                    >
                        {games.map(game =>
                            <GameCard game={game} key={game.id} />
                        )}
                    </SimpleGrid>
            }</>
        )
    }
    return res;
}

export default GameGrid