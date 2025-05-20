
import React, { useEffect, useState } from 'react'
import api from '../services/api-client'
import { AxiosError } from 'axios';
import { Game, GamesResponse } from '../model/fetch-game-types';
import { Text } from '@chakra-ui/react'

const GameGrid: React.FC = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [errorMsg, setErrorMsg] = useState<string>("");

    useEffect(() => {
        api.get<GamesResponse>("/games", { params: { page_size: 100 } })
            .then(res => setGames(res.data.results))
            .catch((err: AxiosError) => setErrorMsg(`${err.status}: ${err.message}`));
        console.log("getting data from API");
    }, []);

    return (
        <>{
            errorMsg ?
                <Text color="red">{errorMsg}</Text> :
                <ul>
                    {games.map(game =>
                        <li key={game.id}>{game.name}</li>
                    )}
                </ul>
        }</>
    )
}

export default GameGrid