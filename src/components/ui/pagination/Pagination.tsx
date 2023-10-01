import { JSX, ReactNode } from 'react'

import cn from 'classnames'

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
  const classNames = {
    root: s.root,
    paginationContainer: s.paginationContainer,
    dots: s.dots,
    controller(disableed: boolean) {
      return cn(s.controller, disableed && s.disabledController)
    },
  }

  const setPrevPage = () => {
    if (currentPage !== 1) {
      onPageChange(currentPage - 1)
    }
  }
  const setNextPage = () => {
    if (currentPage !== totalCount) {
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
        {paginationArray.map((num, index) => {
          if (typeof num === 'string') {
            return (
              <button key={index} className={style.dots}>
                {num}
              </button>
            )
          } else
            return (
              <button
                tabIndex={0}
                key={index}
                /*className={style.paginationItem(num)}*/
                /* onKeyUp={(e: KeyboardEvent<HTMLLIElement>) => setPageNumberFromKeyboard(e, num)}*/
                onClick={() => onPageChange(num)}
              >
                {num}
              </button>
            )
        })}
        <button
          className={classNames.controller(currentPage === totalCount)}
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
