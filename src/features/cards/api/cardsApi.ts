import {
  Card,
  CardRateRequest,
  CardResponse,
  CardsParams,
  CardsResponseType,
  RandomCardRequest,
} from './cardsApi.types'

import { RootState } from '@/app'
import { baseApi, getTextFromFormData, getFileFromFormData, updateCardsQueryData } from '@/common'
import { CardValues } from '@/features'

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
      invalidatesTags: ['Cards', 'Decks', { type: 'Decks', id: 'List' }],
    }),
    updateCard: builder.mutation<Card, { cardId: string; deckId: string; body: FormData }>({
      query: ({ cardId, body }) => ({
        url: `cards/${cardId}`,
        method: 'PATCH',
        body,
      }),
      async onQueryStarted({ cardId, deckId, body }, { dispatch, getState, queryFulfilled }) {
        const state = getState() as RootState

        const patchResult = dispatch(
          cardsApi.util.updateQueryData(
            'getCards',
            {
              id: deckId,
              params: updateCardsQueryData(state),
            },
            draft => {
              const index = draft.items.findIndex(card => card.id === cardId)

              if (index !== -1) {
                const question = getTextFromFormData(body.get('question'))
                const answer = getTextFromFormData(body.get('answer'))
                const questionImg = getFileFromFormData(body.get('questionImg'))
                const answerImg = getFileFromFormData(body.get('answerImg'))

                const updatedCard: Partial<CardValues> = {
                  question,
                  answer,
                }

                if (questionImg) {
                  updatedCard.questionImg = URL.createObjectURL(questionImg)
                }
                if (answerImg) {
                  updatedCard.answerImg = URL.createObjectURL(answerImg)
                }

                draft.items[index] = { ...draft.items[index], ...updatedCard }
              }
            }
          )
        )

        try {
          await queryFulfilled
        } catch (e) {
          patchResult.undo()
        }
      },
      invalidatesTags: ['Cards'],
    }),
    deleteCard: builder.mutation<void, { cardId: string; deckId: string }>({
      query: ({ cardId }) => ({
        url: `cards/${cardId}`,
        method: 'DELETE',
      }),
      async onQueryStarted({ cardId, deckId }, { dispatch, getState, queryFulfilled }) {
        const state = getState() as RootState
        const deleteResult = dispatch(
          cardsApi.util.updateQueryData(
            'getCards',
            {
              id: deckId,
              params: updateCardsQueryData(state),
            },
            draft => {
              const index = draft.items.findIndex(card => card.id === cardId)

              if (index !== -1) {
                draft.items = draft.items.filter((_, cardIndex) => cardIndex !== index)
              }
            }
          )
        )

        try {
          await queryFulfilled
        } catch (e) {
          deleteResult.undo()
        }
      },
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
