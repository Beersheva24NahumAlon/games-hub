
import { Platform } from "../model/fetch-platform-types";
import useFetchData from "./useFetchData";

const endpoint = "/platforms/lists/parents";

export default function usePlatforms(): {data: Platform[], errorMsg: string, isLoading: boolean} {
    return useFetchData<Platform>(endpoint);
}