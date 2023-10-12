import {
  DecksResponseType,
  GetDecksParamsType,
  DeckType,
  DeleteDeckParamsType,
  DeleteDeckResponseType,
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
  }),
})

export const { useGetDecksQuery, useCreateDeckMutation, useDeleteDeckMutation } = decksApi
