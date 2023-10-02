import { JSX } from 'react'

import cn from 'classnames'

import s from './Pagination.module.scss'
import { usePagination } from './usePagination'

import { LeftArrowIcon, RightArrowIcon } from '@/assets'
import { TypographyVariant } from '@/common'
import { Select, SelectProps, Typography } from '@/components'

export type PaginationProps = {
  totalCount: number
  pageSize: number
  currentPage: number
  siblingCount?: number
  onPageChange: (pageNumber: number) => void
} & SelectProps

export const Pagination = ({
  totalCount,
  currentPage,
  pageSize,
  siblingCount = 1,
  onPageChange,
  ...restProps
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
    selectContainer: s.selectContainer,
    select: s.select,
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
          onClick={setPrevPage}
        >
          <LeftArrowIcon />
        </button>
        {paginationItems.map((num, index) => {
          if (num === '...') {
            return (
              <button key={index} className={classNames.dots} tabIndex={-1}>
                {num}
              </button>
            )
          } else
            return (
              <button
                key={index}
                className={classNames.item(num)}
                tabIndex={0}
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
          onClick={setNextPage}
        >
          <RightArrowIcon />
        </button>
      </div>
      <div className={classNames.selectContainer}>
        <Typography variant={TypographyVariant.Body2} as="span">
          Показать
        </Typography>
        <Select className={classNames.select} {...restProps} variant="pagination" />
        <Typography variant={TypographyVariant.Body2} as="span">
          на странице
        </Typography>
      </div>
    </div>
  )
}
