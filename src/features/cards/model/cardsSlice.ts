import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Sort } from '@/components'

type PaginationOptions = { value: string; title: string }[]

const initialState = {
  currentPage: 1,
  pageSize: 10,
  question: '',
  sortParams: null as Sort,
  paginationOptions: [
    { value: '5', title: '5' },
    { value: '10', title: '10' },
    { value: '15', title: '15' },
  ] as PaginationOptions,
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
    setPageSize: (state, action: PayloadAction<{ pageSize: number }>) => {
      state.pageSize = action.payload.pageSize
    },
    setSearchByQuestion: (state, action: PayloadAction<{ searchQuestion: string }>) => {
      state.question = action.payload.searchQuestion
    },
    setSortOrderBy: (state, action: PayloadAction<{ sortParams: Sort }>) => {
      state.sortParams = action.payload.sortParams
    },
  },
})

export const cardsActions = cardsSlice.actions
