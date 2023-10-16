import {
  CardRateRequest,
  CardResponse,
  CardsParams,
  CardsResponseType,
  RandomCardRequest,
} from './cardsApi.types'

import { baseApi } from '@/common'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<CardsResponseType, { id: string; params: CardsParams }>({
      query: ({ id, params }) => ({
        url: `decks/${id}/cards`,
        method: 'GET',
        params,
      }),
      providesTags: ['Cards'],
    }),
    getRandomCard: builder.query<CardResponse, RandomCardRequest>({
      query: ({ id, previousCardId }) => ({
        url: `decks/${id}/learn`,
        method: 'GET',
        params: { previousCardId },
      }),
    }),
    rateCard: builder.mutation<CardResponse, CardRateRequest>({
      query: ({ deckId, ...rest }) => ({
        url: `decks/${deckId}/learn`,
        method: 'POST',
        body: rest,
      }),
      async onQueryStarted({ deckId }, { dispatch, queryFulfilled }) {
        try {
          const { data: newCard } = await queryFulfilled

          dispatch(
            cardsApi.util.updateQueryData('getRandomCard', { id: deckId }, () => {
              return newCard
            })
          )
        } catch (e) {
          console.error(e)
        }
      },
      invalidatesTags: ['Cards'],
    }),
  }),
})

export const { useGetCardsQuery, useGetRandomCardQuery, useRateCardMutation } = cardsApi
