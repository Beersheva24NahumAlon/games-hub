import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import DataResponse from "../model/DataResponse";
import Genre from "../model/Genre";
import { Game } from "../model/fetch-game-types";
import Platform from "../model/Platform";
import ApiClient from "./ApiClient";
import GameQuery from "../model/GameQuery";

class ApiClientAxios implements ApiClient {

    client: AxiosInstance;

    constructor(baseURL: string, key: string) {
        this.client = axios.create({
            baseURL: baseURL,
            params: {
                key: key
            }
        });
    }

    async getGenres(): Promise<Genre[]> {
        return await this.getData<Genre>("/genres");
    }

    async getGames(gameQuery: GameQuery): Promise<Game[]> {
        return await this.getData<Game>("/games", {
            params: {
                genres: gameQuery.genreObj?.slug,
                parent_platforms: gameQuery.platformObj?.id,
                search: gameQuery.search,
                ordering: gameQuery.orderObj?.value
            }
        });
    }

    async getPlatforms(): Promise<Platform[]> {
        return await this.getData<Platform>("/platforms/lists/parents");
    }    

    private async getData<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T[]> {
        return (await this.client.get<DataResponse<T>>(endpoint, config)).data.results;
    }
}

const apiClient = new ApiClientAxios("https://api.rawg.io/api", "db369293ff8f45d98c35a334af45d90c");
export default apiClient;


