import { baseApi } from '@/common'

export const decksApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<any, any>({
      query: () => ({
        url: 'decks',
      }),
      providesTags: ['Decks'],
    }),
  }),
})

export const { useGetDecksQuery } = decksApi
