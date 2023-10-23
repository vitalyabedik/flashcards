import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import {
  Card,
  CardRateRequest,
  CardResponse,
  CardsParams,
  CardsResponseType,
  RandomCardRequest,
} from './cardsApi.types'

import { RootState } from '@/app'
import {
  baseApi,
  getFileFromFormData,
  getTextFromFormData,
  queryNotificationHandler,
  updateCardsQueryData,
} from '@/common'
import { CardValues, GetDeckResponseType } from '@/features'

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
        let questionImageUrl = ''
        let answerImageUrl = ''
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
                  questionImageUrl = URL.createObjectURL(questionImg)
                  updatedCard.questionImg = questionImageUrl
                }
                if (answerImg) {
                  answerImageUrl = URL.createObjectURL(answerImg)
                  updatedCard.answerImg = answerImageUrl
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
        } finally {
          URL.revokeObjectURL(questionImageUrl)
          URL.revokeObjectURL(answerImageUrl)
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
    getRandomCard: builder.query<CardResponse & { name?: string }, RandomCardRequest>({
      queryFn: async (arg, _api, _extraOptions, fetchWithBQ) => {
        const deckResponse = await fetchWithBQ(`decks/${arg.id}`)

        if (deckResponse.error) {
          queryNotificationHandler(deckResponse.error)

          return { error: deckResponse.error as FetchBaseQueryError }
        }

        const cardsResponse = await fetchWithBQ({
          url: `decks/${arg.id}/learn`,
          method: 'GET',
          params: { previousCardId: arg.previousCardId },
        })

        if (cardsResponse.error) {
          queryNotificationHandler(cardsResponse.error)

          return { error: cardsResponse.error as FetchBaseQueryError }
        }
        const deckData = deckResponse.data as GetDeckResponseType
        const cardData = cardsResponse.data as CardResponse

        return { data: { ...cardData, name: deckData.name } }
      },
    }),

    rateCard: builder.mutation<CardResponse, CardRateRequest>({
      query: ({ deckId, ...rest }) => ({
        url: `decks/${deckId}/learns`,
        method: 'POST',
        body: rest,
      }),
      async onQueryStarted({ deckId }, { dispatch, queryFulfilled }) {
        const { data: newCard } = await queryFulfilled

        dispatch(
          cardsApi.util.updateQueryData('getRandomCard', { id: deckId }, () => {
            return newCard
          })
        )
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
