import {
  SignUpParamsType,
  SignUpResponseType,
  LoginResponseType,
  LoginParamsType,
} from './authApi.types'

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
    login: builder.mutation<LoginResponseType, LoginParamsType>({
      query: params => ({
        url: 'auth/login',
        method: 'POST',
        body: params,
      }),
    }),
  }),
})

export const { useSignUpMutation, useLoginMutation } = authApi
