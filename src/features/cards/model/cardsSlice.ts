import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Sort } from '@/components'

const initialState = {
  currentPage: 1,
  pageSize: 10,
  question: '',
  sortData: null as Sort,
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
    setSortOrderBy: (state, action: PayloadAction<{ sortData: Sort }>) => {
      state.sortData = action.payload.sortData
    },
  },
})

export const cardsActions = cardsSlice.actions
