import { DecksResponseType, GetDecksParamsType } from './decksApi.types'

import { baseApi } from '@/common'

export const decksApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<DecksResponseType, GetDecksParamsType | void>({
      query: params => ({
        url: 'decks',
        method: 'GET',
        params: params ?? {},
      }),
      providesTags: ['Decks'],
    }),
  }),
})

export const { useGetDecksQuery } = decksApi
