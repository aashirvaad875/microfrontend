import axios from "axios";
import { API_BASE_URL } from "src/utils/constants";
import { sanitizePayload } from "src/utils/purify.utils";

type RequestConfig = {
  url: string
  method: string
  data?: { [key: string]: unknown } | FormData
  params?: { [key: string]: unknown }
  headers?: Record<string, string>
}

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});


// Interceptors for request and response
axiosInstance.interceptors.request.use((config) => {
  // Add authorization token if available
  const token = localStorage.getItem("authToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors
    return Promise.reject(error);
  }
);

 const axiosBaseQuery =
  () =>
  async ({ url, method, data, params, headers }: RequestConfig) => {
    try {
      const result = await axiosInstance({
        url: API_BASE_URL + url,
        method,
        data: data ? sanitizePayload(data) : undefined,
        params,
        headers,
      })
      return Promise.resolve(result)
    } catch (axiosError: unknown) {
      if (axios.isAxiosError(axiosError)) {
        // Extract relevant error information
        const errorResponse = axiosError.response?.data || axiosError.response || axiosError
        // Reject the promise with a concise error message
        return Promise.reject(errorResponse)
      }
      return Promise.reject(axiosError)

      //Should return in this format only, because in order to
      //populate error from axios interceptor "return response.data"
    }
  }


export default axiosInstance;

export { axiosBaseQuery };
