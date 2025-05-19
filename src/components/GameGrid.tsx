
import React, { useEffect, useState } from 'react'
import api from '../services/api-client'

interface Game {
    id: number,
    name: string
}

interface GamesResponse {
    count: number;
    results: Game[];
}

const GameGrid: React.FC = () => {
    const [data, setData] = useState<GamesResponse>({count: 0, results: []});

    useEffect(() => {
        api.get("/games").then(res => setData(res.data));
        console.log("getting data from API");
    }, []);

    return (
        <ul>
            {data.results.map(game => <li key={game.id}>{game.name}</li>)}
        </ul>
    )
}

export default GameGrid