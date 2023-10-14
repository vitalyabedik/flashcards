import { RootState } from '@/app'
import { formatSortedString } from '@/common'

export const updateDecksQueryData = (state: RootState) => {
  const { searchName, authorId, sliderValues, sortOptions, currentPage, pageSize } = state.decks

  const sortedString = formatSortedString(sortOptions)

  return {
    name: searchName,
    authorId,
    minCardsCount: String(sliderValues[0]),
    maxCardsCount: String(sliderValues[1]),
    orderBy: sortedString,
    itemsPerPage: pageSize,
    currentPage,
  }
}
