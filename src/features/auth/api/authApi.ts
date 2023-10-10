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
    forgotPassword: builder.mutation<void, { email: string }>({
      query: params => ({
        url: 'auth/recover-password',
        method: 'POST',
        body: {
          html: '<h1>Hi, ##name##</h1><p>Click <a href="http://localhost:3000/create-new-password/##token##">here</a> to recover your password</p>',
          email: params.email,
          subject: 'Recovery Password',
        },
      }),
    }),
  }),
})

export const { useSignUpMutation, useLoginMutation, useForgotPasswordMutation } = authApi
