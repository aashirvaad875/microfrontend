// Need to use the React-specific entry point to allow generating React hooks
// import { resetPasswordLinkSchemaType, resetPasswordSchemaType } from '@/utils/schema/auth.schema'
import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from 'src/lib/axiosInstance';

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    login: builder.mutation<null, {email:string, password:string}>({
      query: payload => ({ url: `/auth/login`, method: 'POST', data: payload }),
    })
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useLoginMutation,
} = authApi
