import { useQuery } from "@tanstack/react-query";
import { Genre } from "../model/fetch-genre-types";
import api from '../services/api-client';
import DataResponse from "../model/data-response";
const endpoint = "/genres";

export default function useGenres() {
    return useQuery<Genre[], Error>({
        queryKey: [endpoint],
        queryFn: () => api.get<DataResponse<Genre>>(endpoint).then(res => res.data.results)
    });
}