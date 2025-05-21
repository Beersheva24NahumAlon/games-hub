import { Genre } from "../model/fetch-genre-types";
import useFetchData from "./useFetchData";

const endpoint = "/genres";

export default function useGenres() : {data: Genre[], errorMsg: string, isLoading: boolean} {
    return useFetchData<Genre>(endpoint);
}