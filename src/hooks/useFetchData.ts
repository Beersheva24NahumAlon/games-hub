import { useEffect, useState } from "react";
import api from "../services/api-client";
import { AxiosError, AxiosRequestConfig } from "axios";
import DataResponse from "../model/data-response";

export default function useFetchData<T>(endpoint: string, params?: AxiosRequestConfig, dependensies?: any[]): {data: T[], errorMsg: string, isLoading: boolean} {
    
    const [data, setData] = useState<T[]>([]);
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        api.get<DataResponse<T>>(endpoint, params)
            .then(res => setData(res.data.results))
            .catch((err: AxiosError) => setErrorMsg(err.message))
            .finally(() => setIsLoading(false));
    }, dependensies || []);

    return {data, errorMsg, isLoading};
}