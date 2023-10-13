import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateType = {
  filter: FilterType
  pagination: PaginationType
}

const initialState: InitialStateType = {
  filter: {
    searchByName: '',
    tabValue: 'all',
    sliderValues: [0, 10],
  },
  pagination: {
    currentPage: 1,
    pageSize: 10,
    pageOptions: [
      { value: '10', title: '10' },
      { value: '20', title: '20' },
      { value: '30', title: '30' },
      { value: '40', title: '40' },
      { value: '50', title: '50' },
    ],
  },
}

export const decksSlice = createSlice({
  name: 'decks',
  initialState,
  reducers: {
    setSearchByName: (state, action: PayloadAction<{ searchByName: string }>) => {
      state.filter.searchByName = action.payload.searchByName
    },
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.pagination.currentPage = action.payload.currentPage
    },
    setPageSize: (state, action: PayloadAction<{ pageSize: number }>) => {
      state.pagination.pageSize = action.payload.pageSize
    },
  },
})

export const decksActions = decksSlice.actions

// types
type FilterType = {
  searchByName: string
  tabValue: string
  sliderValues: number[]
}

type PageOptionType = {
  value: string
  title: string
}

type PaginationType = {
  currentPage: number
  pageSize: number
  pageOptions: PageOptionType[]
}
