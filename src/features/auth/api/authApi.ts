import { SignUpParamsType, SignUpResponseType } from './authApi.types'

import { baseApi } from '@/common'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    signUp: builder.mutation<SignUpResponseType, SignUpParamsType>({
      query: params => ({
        url: 'auth/sign-up',
        method: 'POST',
        body: params,
      }),
    }),
  }),
})

export const { useSignUpMutation } = authApi
