import { useQuery } from "@tanstack/react-query";
import { Genre } from "../model/fetch-genre-types";
import apiClient from "../services/api-client";

export default function useGenres() {
    return useQuery<Genre[], Error>({
        queryKey: ["genres"],
        queryFn: () => apiClient.getData<Genre>("/genres"),
        staleTime: 3600_000 * 24
    });
}