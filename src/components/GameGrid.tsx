
import React, { useEffect, useState } from 'react'
import api from '../services/api-client'
import { AxiosError } from 'axios';

interface Game {
    id: number,
    name: string
}

interface GamesResponse {
    count: number;
    results: Game[];
}

const GameGrid: React.FC = () => {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        api.get<GamesResponse>("/gamesx", {params: {page_size: 100}})
                .then(res => setGames(res.data.results))
                        .catch((err: AxiosError) => setGames([{id: 0, name: err.message}]));
        console.log("getting data from API");
    }, []);

    return (
        <ul>
            {games.map(game => 
                <li key={game.id}>{game.name}</li>
            )}
        </ul>
    )
}

export default GameGrid