// Need to use the React-specific entry point to allow generating React hooks
import { EndpointBuilder } from '@reduxjs/toolkit/query/react'
import { authApi } from 'host/services/auth'

// Define a service using a base URL and expected endpoints
export const bucketApi = authApi.injectEndpoints({
  endpoints: (builder: EndpointBuilder<any, any, any>) => ({
    addImage: builder.mutation<any, { file: string; uploadFor: string }>({
      query: ({ file, uploadFor }) => {
        const payload = new FormData()
        payload.append('file', file)
        payload.append('uploadFor', uploadFor)
        return {
          url: `/upload-profile`,
          method: 'POST',
          data: payload,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      },
    }),
  }),
})
// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useAddImageMutation } = bucketApi
