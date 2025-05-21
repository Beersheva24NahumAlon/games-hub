import { Game, GamesResponse } from "../model/fetch-game-types";
import useApi from "./useApi";

export default function useApiGames() {
    return useApi<Game, GamesResponse>("/games");
}