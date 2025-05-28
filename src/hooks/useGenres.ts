import { useQuery } from "@tanstack/react-query";
import Genre from "../model/Genre";
import apiClient from "../services/ApiClinetAxios";

export default function useGenres() {
    return useQuery<Genre[], Error>({
        queryKey: ["genres"],
        queryFn: () => apiClient.getGenres(),
        staleTime: 3600_000 * 24
    });
}