import { formatSortedString, useAppDispatch, useAppSelector } from '@/common'
import { Sort } from '@/components'
import {
  cardsActions,
  selectCardsCurrentPage,
  selectCardsPageSize,
  selectCardsPaginationOptions,
  selectCardsQuestion,
  selectCardsSortParams,
} from '@/features'

export const useCardsOptions = () => {
  const dispatch = useAppDispatch()
  const question = useAppSelector(selectCardsQuestion)
  const currentPage = useAppSelector(selectCardsCurrentPage)
  const itemsPerPage = useAppSelector(selectCardsPageSize)
  const sort = useAppSelector(selectCardsSortParams)
  const paginationOptions = useAppSelector(selectCardsPaginationOptions)
  const orderBy = formatSortedString(sort)
  const onSetInitialState = () => {
    dispatch(cardsActions.setInitialState())
  }
  const onChangeQuestion = (searchQuestion: string) => {
    dispatch(cardsActions.setSearchByQuestion({ searchQuestion }))
  }
  const onChangePage = (currentPage: number) => {
    dispatch(cardsActions.setCurrentPage({ currentPage }))
  }
  const onChangePageSize = (value: string) => {
    dispatch(cardsActions.setPageSize({ pageSize: Number(value) }))
  }
  const onChangeSort = (sortParams: Sort) => {
    dispatch(cardsActions.setSortOrderBy({ sortParams }))
  }

  return {
    question,
    currentPage,
    itemsPerPage,
    paginationOptions,
    sort,
    orderBy,
    onChangeQuestion,
    onChangePage,
    onChangePageSize,
    onChangeSort,
    onSetInitialState,
  }
}
