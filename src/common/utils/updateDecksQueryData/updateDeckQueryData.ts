import { RootState } from '@/app'
import { formatSortedString } from '@/common'

export const updateDecksQueryData = (state: RootState) => {
  const { searchName, authorId, cardsCount, sortOptions, currentPage, pageSize } = state.decks

  const sortedString = formatSortedString(sortOptions)

  return {
    name: searchName,
    authorId,
    minCardsCount: cardsCount.min,
    maxCardsCount: cardsCount.max,
    orderBy: sortedString,
    itemsPerPage: pageSize,
    currentPage,
  }
}
