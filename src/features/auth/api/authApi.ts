import { LoginResponseType, LoginParamsType } from './authApi.types'

import { baseApi } from '@/common'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<LoginResponseType, LoginParamsType>({
      query: params => ({
        url: 'auth/login',
        method: 'POST',
        body: params,
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi
