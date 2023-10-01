import { JSX, ReactNode } from 'react'

import cn from 'classnames'

import s from './Pagination.module.scss'
import { usePagination } from './usePagination'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

type PaginationProps = {
  totalCount: number
  pageSize: number
  currentPage: number
  siblingCount?: number
  leftArrow: ReactNode
  rightArrow: ReactNode
  onPageChange: (pageNumber: number) => void
}

export const Pagination = ({
  totalCount,
  currentPage,
  pageSize,
  siblingCount = 1,
  leftArrow,
  rightArrow,
  onPageChange,
}: PaginationProps): JSX.Element => {
  const totalPageCount = Math.ceil(totalCount / pageSize)
  const paginationItems = usePagination({ totalPageCount, currentPage, siblingCount })

  const classNames = {
    root: s.root,
    paginationContainer: s.paginationContainer,
    dots: s.dots,
    controller(disabled: boolean) {
      return cn(s.controller, disabled && s.disabledController)
    },
    item(itemNumber: number) {
      return cn(s.item, itemNumber === currentPage && s.activeItem)
    },
  }

  const setPrevPage = () => {
    if (currentPage !== 1) {
      onPageChange(currentPage - 1)
    }
  }
  const setNextPage = () => {
    if (currentPage !== totalPageCount) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className={classNames.root}>
      <div className={classNames.paginationContainer}>
        <button
          className={classNames.controller(currentPage === 1)}
          tabIndex={0}
          /* onKeyUp={setPrevPageFromKeyboard}*/
          onClick={setPrevPage}
        >
          {leftArrow}
        </button>
        {paginationItems.map((num, index) => {
          if (num === '...') {
            return (
              <button key={index} className={classNames.dots}>
                {num}
              </button>
            )
          } else
            return (
              <button
                key={index}
                className={classNames.item(num)}
                tabIndex={0}
                /* onKeyUp={(e: KeyboardEvent<HTMLLIElement>) => setPageNumberFromKeyboard(e, num)}*/
                onClick={() => onPageChange(num)}
              >
                <Typography variant={TypographyVariant.Body2} as="span">
                  {num}
                </Typography>
              </button>
            )
        })}
        <button
          className={classNames.controller(currentPage === totalPageCount)}
          tabIndex={0}
          /*   onKeyUp={setNextPageFromKeyboard}*/
          onClick={setNextPage}
        >
          {rightArrow}
        </button>
      </div>
    </div>
  )
}
