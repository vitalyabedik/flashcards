import {
  Card,
  CardRateRequest,
  CardResponse,
  CardsParams,
  CardsResponseType,
  RandomCardRequest,
} from './cardsApi.types'

import { RootState } from '@/app'
import { baseApi, updateCardsQueryData } from '@/common'

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
                const questionFormData = body.get('question')
                const question = typeof questionFormData === 'string' ? questionFormData : ''
                const answerFormData = body.get('answer')
                const answer = typeof answerFormData === 'string' ? answerFormData : ''
                const updatedCard = {
                  question,
                  answer,
                  questionImg: URL.createObjectURL(body.get('questionImg') as Blob),
                  answerImg: URL.createObjectURL(body.get('answerImg') as Blob),
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
