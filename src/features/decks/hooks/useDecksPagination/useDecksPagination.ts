import { useAppDispatch, useAppSelector } from '@/common'
import { decksActions, selectCurrentPage, selectPageOptions, selectPageSize } from '@/features'

export const useDecksPagination = () => {
  const currentPage = useAppSelector(selectCurrentPage)
  const pageSize = useAppSelector(selectPageSize)
  const pageOptions = useAppSelector(selectPageOptions)

  const dispatch = useAppDispatch()

  const onChangeCurrentPageCallback = (currentPage: number) => {
    dispatch(decksActions.setCurrentPage({ currentPage }))
  }

  const onChangePageSizeCallback = (pageSize: string) => {
    dispatch(decksActions.setPageSize({ pageSize: Number(pageSize) }))
  }

  return {
    currentPage,
    pageSize,
    pageOptions,
    onChangeCurrentPageCallback,
    onChangePageSizeCallback,
  }
}
