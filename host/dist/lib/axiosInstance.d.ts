type RequestConfig = {
    url: string;
    method: string;
    data?: {
        [key: string]: unknown;
    } | FormData;
    params?: {
        [key: string]: unknown;
    };
    headers?: Record<string, string>;
};
declare const axiosInstance: import("axios").AxiosInstance;
declare const axiosBaseQuery: () => ({ url, method, data, params, headers }: RequestConfig) => Promise<import("axios").AxiosResponse<any, any>>;
export default axiosInstance;
export { axiosBaseQuery };
//# sourceMappingURL=axiosInstance.d.ts.map