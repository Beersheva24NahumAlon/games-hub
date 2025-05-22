
import React from 'react'
import { SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import GameCard from './GameCard';
import useGames from '../hooks/useGames';
import { Platform } from '../model/fetch-platform-types';

interface Props {
    selectedGenre: string | null;
    selectedPlatform: Platform | null;
}

const GameGrid: React.FC<Props> = ({selectedGenre, selectedPlatform}) => {

    const { data: games, errorMsg, isLoading } = useGames(selectedGenre, selectedPlatform);
    return isLoading ? 
        ( <Spinner /> ) :
        (
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
        );
}

export default GameGrid