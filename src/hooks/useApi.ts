import { useEffect, useState } from "react";
import api from "../services/api-client";
import { AxiosError, AxiosRequestConfig } from "axios";

export default function useApi<D, R extends {results: D[]}>(url: string, params?: AxiosRequestConfig): {data: D[], errorMsg: string} {
    
    const [data, setData] = useState<D[]>([]);
    const [errorMsg, setErrorMsg] = useState<string>("");

    useEffect(() => {
        api.get<R>(url, params)
            .then(res => setData(res.data.results))
            .catch((err: AxiosError) => setErrorMsg(err.message));
    }, []);

    return {data, errorMsg};
}