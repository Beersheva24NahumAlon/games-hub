
import React from 'react'
import { Game, GamesResponse } from '../model/fetch-game-types';
import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard';
import useApi from '../hooks/useApi';

const GameGrid: React.FC = () => {

    const {data, errorMsg} = useApi<Game, GamesResponse>("/games");

    return (
        <>{
            errorMsg ?
                <Text color="red">{errorMsg}</Text> :
                <SimpleGrid 
                    gap="5" 
                    maxHeight="85vh" 
                    overflow="auto" 
                    marginTop="2vh" 
                    columns={{base: 1, sm: 2, md: 3}}
                    paddingX="5"
                >
                    {data.map(game =>
                        <GameCard game={game} key={game.id}/>
                    )}
                </SimpleGrid>
        }</>
    )
}

export default GameGrid