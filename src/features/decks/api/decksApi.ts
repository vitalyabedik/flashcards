import {
  DecksResponseType,
  GetDecksParamsType,
  DeckType,
  DeleteDeckParamsType,
  DeleteDeckResponseType,
  UpdateDeckParamsType,
  GetDeckParamsType,
} from './decksApi.types'

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
    createDeck: builder.mutation<DeckType, FormData>({
      query: params => ({
        url: 'decks',
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ['Decks'],
    }),
    deleteDeck: builder.mutation<DeleteDeckResponseType, DeleteDeckParamsType>({
      query: ({ id }) => ({
        url: `decks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Decks'],
    }),
    updateDeck: builder.mutation<DeckType, UpdateDeckParamsType>({
      query: ({ id, body }) => ({
        url: `decks/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Decks'],
    }),
    getDeck: builder.query<DeckType, GetDeckParamsType>({
      query: ({ id }) => ({
        url: `decks/${id}`,
        method: 'GET',
      }),
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
