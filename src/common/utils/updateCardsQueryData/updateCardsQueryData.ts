import { RootState } from '@/app'
import { formatSortedString } from '@/common'

export const updateCardsQueryData = (state: RootState) => {
  const { question, currentPage, pageSize, sortParams } = state.cards

  const sortedString = formatSortedString(sortParams)

  return {
    question,
    currentPage,
    itemsPerPage: pageSize,
    orderBy: sortedString,
  }
}
