import { useQuery } from "@tanstack/react-query";
import { Platform } from "../model/fetch-platform-types";
import apiClient from '../services/api-client';

export default function usePlatforms() {
        return useQuery<Platform[], Error>({
        queryKey: ["platforms"],
        queryFn: () => apiClient.getData<Platform>("/platforms/lists/parents"),
        staleTime: 3600_000 * 24
    });
}