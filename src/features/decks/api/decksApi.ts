import { DecksResponseType } from './decksApi.types'

import { baseApi } from '@/common'

export const decksApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<DecksResponseType, void>({
      query: () => ({
        url: 'decks',
      }),
      providesTags: ['Decks'],
    }),
  }),
})

export const { useGetDecksQuery } = decksApi
