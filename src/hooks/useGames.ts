import { Game } from "../model/fetch-game-types";
import useGameQuery from "../state-management/store";
import useFetchData from "./useFetchData";

const endpoint = "/games";

export default function useGames(): { data: Game[], errorMsg: string, isLoading: boolean } {
    const gameQuery = useGameQuery(s => s.gameQuery);
    return useFetchData<Game>(endpoint,
        {
            params: {
                genres: gameQuery.genreObj?.slug,
                parent_platforms: gameQuery.platformObj?.id,
                search: gameQuery.search,
                ordering: gameQuery.orderObj?.value
            },
        },
        [gameQuery]
    );
}