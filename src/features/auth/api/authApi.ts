import {
  SignUpParamsType,
  SignUpResponseType,
  LoginResponseType,
  LoginParamsType,
  RecoverPasswordParamsType,
  ResetPasswordParamsType,
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
    recoverPassword: builder.mutation<void, RecoverPasswordParamsType>({
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
    resetPassword: builder.mutation<void, ResetPasswordParamsType>({
      query: ({ password, token }) => ({
        url: `auth/reset-password/${token}`,
        method: 'POST',
        body: { password },
      }),
    }),
  }),
})

export const {
  useSignUpMutation,
  useLoginMutation,
  useRecoverPasswordMutation,
  useResetPasswordMutation,
} = authApi
