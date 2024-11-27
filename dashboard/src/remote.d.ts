declare module "host/axiosInstance" {
  import { AxiosInstance } from "axios";
  const axiosInstance: AxiosInstance;
  
  type RequestConfig = {
    url: string;
    method: string;
    data?: { [key: string]: unknown } | FormData;
    params?: { [key: string]: unknown };
    headers?: Record<string, string>;
  };
  
  const axiosBaseQuery: () => (
    args: RequestConfig
  ) => Promise<{ data: any }>;


  export default axiosInstance;
  export { axiosBaseQuery };
}

declare module "host/services/auth" {
  import { MutationDefinition } from '@reduxjs/toolkit/query/react';
  import {Api} from '@reduxjs/toolkit/query/react';
  type LoginPayload = {
    email: string;
    password: string;
  };

  type UploadImageResponseType = {
    url: string;
  };

  const useLoginMutation: MutationHook<
    LoginPayload,
    string
  >;

  const authApi: Api<{
    endpoints:{
      login: MutationHook<LoginPayload, string>
    }
  }>


  export { useLoginMutation, authApi };
}