import {
  DecksResponseType,
  GetDecksParamsType,
  DeckType,
  DeleteDeckParamsType,
  DeleteDeckResponseType,
  UpdateDeckParamsType,
} from './decksApi.types'

import { RootState } from '@/app'
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
      query: body => ({
        url: 'decks',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
        const state = getState() as RootState
        const { searchName, authorId, sliderValues, sortOptions, currentPage, pageSize } =
          state.decks

        try {
          const sortedString = sortOptions
            ? `${sortOptions.key}-${sortOptions.direction}`
            : undefined
          const response = await queryFulfilled

          dispatch(
            decksApi.util.updateQueryData(
              'getDecks',
              {
                name: searchName,
                authorId,
                minCardsCount: String(sliderValues[0]),
                maxCardsCount: String(sliderValues[1]),
                orderBy: sortedString,
                itemsPerPage: pageSize,
                currentPage,
              },
              draft => {
                draft.items.unshift(response.data)
              }
            )
          )
        } catch (error) {
          console.log(error)
        }
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
        const { searchName, authorId, sliderValues, sortOptions, currentPage, pageSize } =
          state.decks

        const sortedString = sortOptions ? `${sortOptions.key}-${sortOptions.direction}` : undefined

        const patchResult = dispatch(
          decksApi.util.updateQueryData(
            'getDecks',
            {
              name: searchName,
              authorId,
              minCardsCount: String(sliderValues[0]),
              maxCardsCount: String(sliderValues[1]),
              orderBy: sortedString,
              itemsPerPage: pageSize,
              currentPage,
            },
            draft => {
              const index = draft.items.findIndex(deck => deck.id === id)

              if (index !== -1) {
                draft.items.splice(index, 1)
              }
            }
          )
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
      invalidatesTags: ['Decks'],
    }),
  }),
})

export const {
  useGetDecksQuery,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useUpdateDeckMutation,
} = decksApi
