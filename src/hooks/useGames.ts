import { Game } from "../model/fetch-game-types";
import useGameQuery from "../state-management/store";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/ApiClinetAxios";

export default function useGames() {
    const gameQuery = useGameQuery(s => s.gameQuery);
    
    return useQuery<Game[], Error>({
        queryKey: ["games", gameQuery],
        queryFn: () => apiClient.getGames(gameQuery),
        staleTime: 3600_000
    });
}