import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.flashcards.andrii.es/v1',
  credentials: 'include',
  prepareHeaders: headers => {
    headers.append('x-auth-skip', 'true')
  },
})

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['Decks'],
  baseQuery,
  endpoints: () => ({}),
})
