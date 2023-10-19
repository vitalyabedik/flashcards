import { RootState } from '@/app'
import { formatSortedString } from '@/common'

export const updateCardsQueryData = (state: RootState) => {
  const { question, currentPage, pageSize, sortData } = state.cards

  const sortedString = formatSortedString(sortData)

  return {
    question,
    currentPage,
    itemsPerPage: pageSize,
    orderBy: sortedString,
  }
}
