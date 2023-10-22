import {
  SignUpParamsType,
  LoginResponseType,
  LoginParamsType,
  BaseResponseType,
  RecoverPasswordParamsType,
  ResetPasswordParamsType,
} from './authApi.types'

import { baseApi, getTextFromFormData } from '@/common'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    me: builder.query<BaseResponseType | null, void>({
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
      query: body => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Me'],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(authApi.util.updateQueryData('me', undefined, () => null))

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      invalidatesTags: ['Me'],
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
    updateProfile: builder.mutation<BaseResponseType, FormData>({
      query: body => ({
        url: 'auth/me',
        method: 'PATCH',
        body,
      }),
      // transformErrorResponse: response => queryNotificationHandler(response),
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        let avatar = ''

        const patchResult = dispatch(
          authApi.util.updateQueryData('me', undefined, draft => {
            const name = getTextFromFormData(body.get('name'))
            const avatarBlob = body.get('avatar')

            if (avatarBlob instanceof Blob) {
              avatar = URL.createObjectURL(avatarBlob)
            }

            if (draft && avatar) {
              draft.avatar = avatar
            }

            if (draft && name) {
              draft.name = name
            }
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        } finally {
          URL.revokeObjectURL(avatar)
        }
      },
      invalidatesTags: ['Me'],
    }),
  }),
})

export const {
  useMeQuery,
  useSignUpMutation,
  useLoginMutation,
  useLogoutMutation,
  useRecoverPasswordMutation,
  useResetPasswordMutation,
  useUpdateProfileMutation,
} = authApi
