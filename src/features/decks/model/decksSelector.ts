import { RootState } from '@/app'

export const selectSearchName = (state: RootState) => state.decks.searchName

export const selectTabValue = (state: RootState) => state.decks.tabValue

export const selectCardsCount = (state: RootState) => state.decks.cardsCount

export const selectAuthorId = (state: RootState) => state.decks.authorId

export const selectSortOptions = (state: RootState) => state.decks.sortOptions

export const selectCurrentPage = (state: RootState) => state.decks.currentPage

export const selectPageSize = (state: RootState) => state.decks.pageSize

export const selectPageOptions = (state: RootState) => state.decks.pageOptions
