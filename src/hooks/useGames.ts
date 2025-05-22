import { Game } from "../model/fetch-game-types";
import { Platform } from "../model/fetch-platform-types";
import useFetchData from "./useFetchData";

const endpoint = "/games";

export default function useGames(genreName: string | null, platformObj: Platform | null): {data: Game[], errorMsg: string, isLoading: boolean} {
    return useFetchData<Game>(endpoint, {params: {genres: genreName, parent_platforms: platformObj?.id}}, [genreName, platformObj]);
}