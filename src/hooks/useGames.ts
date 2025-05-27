import { Game } from "../model/fetch-game-types";
import useGameQuery from "../state-management/store";
import api from '../services/api-client';
import DataResponse from "../model/data-response";
import { useQuery } from "@tanstack/react-query";

const endpoint = "/games";

export default function useGames() {
    const gameQuery = useGameQuery(s => s.gameQuery);
    return useQuery<Game[], Error>({
        queryKey: ["games", gameQuery],
        queryFn: () => api.get<DataResponse<Game>>(endpoint, {
            params: {
                genres: gameQuery.genreObj?.slug,
                parent_platforms: gameQuery.platformObj?.id,
                search: gameQuery.search,
                ordering: gameQuery.orderObj?.value
            }
        }).then(res => res.data.results),
        staleTime: 3600000 * 24
    });
}