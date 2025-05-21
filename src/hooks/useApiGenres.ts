
import { Genre, GenresResponse } from "../model/fetch-genre-types";
import useApi from "./useApi";

export default function useApiGames() {
    return useApi<Genre, GenresResponse>("/genres");
}