import {
  CardRateRequest,
  CardResponse,
  CardsParams,
  CardsResponseType,
  RandomCardRequest,
  Card,
} from './cardsApi.types'

import { baseApi } from '@/common'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<CardsResponseType, { id: string; params: CardsParams }>({
      query: ({ id, params }) => ({
        url: `decks/${id}/cards`,
        method: 'GET',
        params: params,
      }),
      providesTags: ['Cards'],
    }),
    createCard: builder.mutation<Card, { id: string; body: FormData }>({
      query: ({ id, body }) => ({
        url: `decks/${id}/cards`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Decks', 'Cards', { type: 'Decks', id: 'List' }],
    }),
    updateCard: builder.mutation<Card, { id: string; body: FormData }>({
      query: ({ id, body }) => ({
        url: `cards/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Cards'],
    }),
    deleteCard: builder.mutation<void, { id: string }>({
      query: ({ id }) => ({
        url: `cards/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cards', { type: 'Decks', id: 'List' }],
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

export const {
  useGetCardsQuery,
  useGetRandomCardQuery,
  useRateCardMutation,
  useCreateCardMutation,
  useUpdateCardMutation,
  useDeleteCardMutation,
} = cardsApi
