import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from './baseQueryWithReauth'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['Me', 'Decks', 'Cards'],
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
})
