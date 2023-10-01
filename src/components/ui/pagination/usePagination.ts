import { useMemo } from 'react'

import { createRangeArray } from './createRangeArray'

const DOTS = '...'

type Props = {
  totalPageCount: number
  currentPage: number
  siblingCount: number
}
//www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
/**
 Generates an array of pagination elements.
 @param {Object} props - The props object.
 @param {number} props.totalPageCount - The total number of pages.
 @param {number} props.currentPage - The current page.
 @param {number} [props.siblingCount=1] - The number of siblings (pages) to display on each side of the current page.
 @returns {Array} An array of pagination elements.
 */

export const usePagination = ({
  totalPageCount,
  currentPage,
  siblingCount = 1,
}: Props): (number | '...')[] => {
  return useMemo(() => {
    /**
         The maximum number of pages to display in the pagination array.
         It is calculated as the sum of siblingCount (number of siblings on each side of the current page),
         plus 5 additional elements: first page, last page, current page, and two dots representing skipped pages.
         @type {number}
         */
    const maxPagesCount: number = siblingCount + 5

    if (maxPagesCount >= totalPageCount) {
      return createRangeArray(1, totalPageCount)
    }

    const leftSiblingIndex = currentPage - siblingCount <= 1 ? 1 : currentPage - siblingCount
    const rightSiblingIndex =
      currentPage + siblingCount >= totalPageCount ? totalPageCount : currentPage + siblingCount

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const rightLimitValue = 3 + 2 * siblingCount // determine the number of digits before decimal dots
      const array = createRangeArray(1, rightLimitValue)

      return [...array, DOTS, totalPageCount]
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const leftLimitValue = totalPageCount - 3 - 2 * siblingCount + 1 // determine the number of digits after decimal dots
      const array = createRangeArray(leftLimitValue, totalPageCount)

      return [1, DOTS, ...array]
    }
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleArray = createRangeArray(leftSiblingIndex, rightSiblingIndex)

      return [1, DOTS, ...middleArray, DOTS, totalPageCount]
    }

    return createRangeArray(1, totalPageCount)
  }, [totalPageCount, currentPage, siblingCount])
}
