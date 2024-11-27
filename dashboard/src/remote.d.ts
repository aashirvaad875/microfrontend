declare module 'host/services/auth' {
  import { MutationDefinition } from '@reduxjs/toolkit/query/react'
  import { Api } from '@reduxjs/toolkit/query/react'
  type LoginPayload = {
    email: string
    password: string
  }

  type UploadImageResponseType = {
    url: string
  }

  const useLoginMutation: MutationHook<LoginPayload, string>

  const authApi: Api<{
    endpoints: {
      login: MutationHook<LoginPayload, string>
    }
  }>

  export { useLoginMutation, authApi }
}
