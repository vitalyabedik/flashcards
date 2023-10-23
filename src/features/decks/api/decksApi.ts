import {
  DecksResponseType,
  GetDecksParamsType,
  DeckType,
  DeleteDeckParamsType,
  DeleteDeckResponseType,
  UpdateDeckParamsType,
  GetDeckParamsType,
  GetDeckResponseType,
} from './decksApi.types'

import { RootState } from '@/app'
import { baseApi, queryNotificationHandler, updateDecksQueryData } from '@/common'

export const decksApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<DecksResponseType, GetDecksParamsType | void>({
      query: params => ({
        url: 'decks',
        method: 'GET',
        params: params ?? {},
      }),
      transformErrorResponse: response => queryNotificationHandler(response),
      providesTags: ['Decks'],
    }),
    createDeck: builder.mutation<DeckType, FormData>({
      query: body => ({
        url: 'decks',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
        const state = getState() as RootState

        const response = await queryFulfilled

        dispatch(
          decksApi.util.updateQueryData('getDecks', updateDecksQueryData(state), draft => {
            draft.items.unshift(response.data)
          })
        )
      },
      invalidatesTags: ['Decks'],
    }),
    deleteDeck: builder.mutation<DeleteDeckResponseType, DeleteDeckParamsType>({
      query: ({ id }) => ({
        url: `decks/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted({ id }, { dispatch, getState, queryFulfilled }) {
        const state = getState() as RootState

        const patchResult = dispatch(
          decksApi.util.updateQueryData('getDecks', updateDecksQueryData(state), draft => {
            const index = draft?.items?.findIndex(deck => deck.id === id)

            if (index !== -1) {
              draft?.items?.splice(index, 1)
            }
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      invalidatesTags: ['Decks'],
    }),
    updateDeck: builder.mutation<DeckType, UpdateDeckParamsType>({
      query: ({ id, body }) => ({
        url: `decks/${id}`,
        method: 'PATCH',
        body,
      }),
      async onQueryStarted({ id, body }, { dispatch, getState, queryFulfilled }) {
        const state = getState() as RootState

        let cover = ''
        const patchResult = dispatch(
          decksApi.util.updateQueryData('getDecks', updateDecksQueryData(state), draft => {
            const index = draft.items.findIndex(deck => deck.id === id)

            const name = body.get('name')
            const isPrivate = body.get('isPrivate')

            cover = URL.createObjectURL(body.get('cover') as Blob)

            if (index !== -1) {
              draft.items[index] = {
                ...draft.items[index],
                name: typeof name === 'string' ? name : '',
                isPrivate: !!isPrivate,
                cover: cover,
              }
            }
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        } finally {
          URL.revokeObjectURL(cover)
        }
      },
      invalidatesTags: ['Decks'],
    }),
    getDeck: builder.query<GetDeckResponseType, GetDeckParamsType>({
      query: ({ id }) => ({
        url: `decks/${id}`,
        method: 'GET',
      }),
      transformErrorResponse: response => {
        queryNotificationHandler(response)
      },
      providesTags: ['Decks', { type: 'Decks', id: 'List' }],
    }),
  }),
})

export const {
  useGetDecksQuery,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useUpdateDeckMutation,
  useGetDeckQuery,
} = decksApi
