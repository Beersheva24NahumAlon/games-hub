import { Game } from "../model/fetch-game-types";
import GameQuery from "../model/GameQuery";
import useFetchData from "./useFetchData";

const endpoint = "/games";

export default function useGames(gameQuery: GameQuery): { data: Game[], errorMsg: string, isLoading: boolean } {
    return useFetchData<Game>(endpoint,
        {
            params: {
                genres: gameQuery.genreObj?.slug,
                parent_platforms: gameQuery.platformObj?.id,
                search: gameQuery.search,
            },
        },
        [gameQuery]
    );
}