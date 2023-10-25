import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Sort } from '@/components'

export type CardsCountType = {
  min: number
  max: number | undefined
}

type PageOptionType = {
  value: string
  title: string
}

const initialState = {
  searchName: '',
  tabValue: 'all',
  cardsCount: {
    min: 0,
    max: undefined,
  } as CardsCountType,
  authorId: undefined as string | undefined,
  currentPage: 1,
  pageSize: 10,
  pageOptions: [
    { value: '5', title: '5' },
    { value: '10', title: '10' },
    { value: '15', title: '15' },
  ] as PageOptionType[],
  sortOptions: undefined as undefined | Sort,
}

export const decksSlice = createSlice({
  name: 'decks',
  initialState,
  reducers: {
    setSearchByName: (state, action: PayloadAction<{ searchName: string }>) => {
      state.searchName = action.payload.searchName
    },
    setTabValue: (state, action: PayloadAction<{ tabValue: string }>) => {
      state.tabValue = action.payload.tabValue
    },
    setAuthorId: (state, action: PayloadAction<{ authorId: string | undefined }>) => {
      state.authorId = action.payload.authorId
    },
    setSortOptions: (state, action: PayloadAction<{ sortOptions: undefined | Sort }>) => {
      state.sortOptions = action.payload.sortOptions
    },
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
    setPageSize: (state, action: PayloadAction<{ pageSize: number }>) => {
      state.pageSize = action.payload.pageSize
    },
    resetCurrentPage: state => {
      state.currentPage = 1
    },
    clearFilters: state => {
      state.searchName = ''
      state.tabValue = 'all'
      state.authorId = undefined
      state.sortOptions = null
    },
  },
})

export const decksActions = decksSlice.actions
