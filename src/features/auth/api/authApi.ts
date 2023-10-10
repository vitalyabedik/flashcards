import {
  SignUpParamsType,
  LoginResponseType,
  LoginParamsType,
  BaseResponseType,
} from './authApi.types'

import { baseApi } from '@/common'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    me: builder.query<BaseResponseType, void>({
      query: () => 'auth/me',
      providesTags: ['Me'],
    }),
    signUp: builder.mutation<BaseResponseType, SignUpParamsType>({
      query: params => ({
        url: 'auth/sign-up',
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ['Me'],
    }),
    login: builder.mutation<LoginResponseType, LoginParamsType>({
      query: params => ({
        url: 'auth/login',
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ['Me'],
    }),
  }),
})

export const { useMeQuery, useSignUpMutation, useLoginMutation } = authApi
