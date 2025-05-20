
import React, { useEffect, useState } from 'react'
import api from '../services/api-client'
import { AxiosError } from 'axios';
import { Game, GamesResponse } from '../model/fetch-game-types';
import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard';

const GameGrid: React.FC = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [errorMsg, setErrorMsg] = useState<string>("");

    useEffect(() => {
        api.get<GamesResponse>("/games", { params: { page_size: 100 } })
            .then(res => setGames(res.data.results))
            .catch((err: AxiosError) => setErrorMsg(err.message));
    }, []);

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
                    {games.map(game =>
                        <GameCard game={game} key={game.id}/>
                    )}
                </SimpleGrid>
        }</>
    )
}

export default GameGrid