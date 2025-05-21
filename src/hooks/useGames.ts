import { Game } from "../model/fetch-game-types";
import useFetchData from "./useFetchData";

const endpoint = "/games";

export default function useGames(): {data: Game[], errorMsg: string, isLoading: boolean} {
    return useFetchData<Game>(endpoint);
}