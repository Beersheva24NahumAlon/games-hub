import { Game } from "../model/fetch-game-types";
import { allGenres, Genre } from "../model/fetch-genre-types";
import { allPlatforms, Platform } from "../model/fetch-platform-types";
import { GamesParams } from "../model/response-game-params";
import useFetchData from "./useFetchData";

const endpoint = "/games";

export default function useGames(genreObj: Genre | null, platformObj: Platform | null): {data: Game[], errorMsg: string, isLoading: boolean} {
    const params:GamesParams = {params: {}};
    if (platformObj?.id != allPlatforms.id) {
        params.params.parent_platforms = platformObj?.id;
    }
        if (genreObj?.id != allGenres.id) {
        params.params.parent_platforms = platformObj?.id;
    }
    return useFetchData<Game>(endpoint, params, [genreObj, platformObj]);
}