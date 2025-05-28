import { useQuery } from "@tanstack/react-query";
import Platform from "../model/Platform";
import apiClient from '../services/ApiClinetAxios';

export default function usePlatforms() {
        return useQuery<Platform[], Error>({
        queryKey: ["platforms"],
        queryFn: () => apiClient.getPlatforms(),
        staleTime: 3600_000 * 24
    });
}