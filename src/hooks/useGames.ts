import { Game } from "../model/fetch-game-types";
import useGameQuery from "../state-management/store";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export default function useGames() {
    const gameQuery = useGameQuery(s => s.gameQuery);
    
    return useQuery<Game[], Error>({
        queryKey: ["games", gameQuery],
        queryFn: () => apiClient.getData<Game>("/games", {
            params: {
                genres: gameQuery.genreObj?.slug,
                parent_platforms: gameQuery.platformObj?.id,
                search: gameQuery.search,
                ordering: gameQuery.orderObj?.value
            }
        }),
        staleTime: 3600_000
    });
}