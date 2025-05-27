import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import DataResponse from "../model/data-response";

class ApiClient {

    client: AxiosInstance;

    constructor(baseURL: string, key: string) {
        this.client = axios.create({
            baseURL: baseURL,
            params: {
                key: key
            }
        });
    }

    async getData<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T[]> {
        return (await this.client.get<DataResponse<T>>(endpoint, config)).data.results;
    }
}

const apiClient = new ApiClient("https://api.rawg.io/api", "db369293ff8f45d98c35a334af45d90c");
export default apiClient;


 