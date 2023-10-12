import { CardsParams, CardsResponseType } from './cardsApi.types'

import { baseApi } from '@/common'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<CardsResponseType, { id: string; params: CardsParams }>({
      query: ({ id, params }) => ({
        url: `decks/${id}`,
        params,
      }),
      providesTags: ['Cards'],
    }),
  }),
})

export const { useGetCardsQuery } = cardsApi
