import { RootState } from '@/app'

export const selectSearchByName = (state: RootState) => state.decks.filter.searchByName

export const selectTabValue = (state: RootState) => state.decks.filter.tabValue

export const selectSliderValues = (state: RootState) => state.decks.filter.sliderValues

export const selectCurrentPage = (state: RootState) => state.decks.pagination.currentPage

export const selectPageSize = (state: RootState) => state.decks.pagination.pageSize

export const selectPageOptions = (state: RootState) => state.decks.pagination.pageOptions
