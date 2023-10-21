import { RootState } from '@/app'

export const selectCardsQuestion = (state: RootState) => state.cards.question
export const selectCardsCurrentPage = (state: RootState) => state.cards.currentPage
export const selectCardsPageSize = (state: RootState) => state.cards.pageSize
export const selectCardsSortParams = (state: RootState) => state.cards.sortParams
export const selectCardsPaginationOptions = (state: RootState) => state.cards.paginationOptions
