import api from '../services/api-client';
import { useQuery } from "@tanstack/react-query";
import { Platform } from "../model/fetch-platform-types";
import DataResponse from '../model/data-response';

const endpoint = "/platforms/lists/parents";

export default function usePlatforms() {
        return useQuery<Platform[], Error>({
        queryKey: ["platforms"],
        queryFn: () => api.get<DataResponse<Platform>>(endpoint).then(res => res.data.results),
        staleTime: 3600000 * 24
    });
}