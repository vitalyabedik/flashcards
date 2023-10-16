import { useAppDispatch, useAppSelector } from '@/common'
import { Sort } from '@/components'
import {
  decksActions,
  selectAuthorId,
  selectCurrentPage,
  selectPageOptions,
  selectPageSize,
  selectSearchName,
  selectSliderValues,
  selectSortOptions,
  selectTabValue,
  useMeQuery,
} from '@/features'

export const useDecksOptions = () => {
  const searchName = useAppSelector(selectSearchName)
  const tabValue = useAppSelector(selectTabValue)
  const sliderValues = useAppSelector(selectSliderValues)
  const authorId = useAppSelector(selectAuthorId)
  const sortOptions = useAppSelector(selectSortOptions)
  const currentPage = useAppSelector(selectCurrentPage)
  const pageSize = useAppSelector(selectPageSize)
  const pageOptions = useAppSelector(selectPageOptions)

  const {
    setSearchByName,
    setTabValue,
    setSliderValues,
    setAuthorId,
    setSortOptions,
    setCurrentPage,
    setPageSize,
  } = decksActions

  const dispatch = useAppDispatch()

  const { data: user } = useMeQuery()

  const onSearchCallback = (name: string) => {
    dispatch(setSearchByName({ searchName: name }))
  }

  const onChangeTabValueCallback = (tabValue: string) => {
    dispatch(setTabValue({ tabValue }))

    if (tabValue === 'my') {
      dispatch(setAuthorId({ authorId: user?.id }))
    } else {
      dispatch(setAuthorId({ authorId: undefined }))
    }
  }

  const onChangeSliderValueCallback = (sliderValues: number[]) => {
    dispatch(setSliderValues({ sliderValues }))
  }

  const onChangeSortCallback = (orderBy: Sort) => {
    dispatch(setSortOptions({ sortOptions: orderBy }))
  }

  const onClearFilterCallback = () => {
    dispatch(setSearchByName({ searchName: '' }))
    dispatch(setTabValue({ tabValue: 'all' }))
    dispatch(setSliderValues({ sliderValues: [0, 10] }))
    dispatch(setAuthorId({ authorId: undefined }))
    dispatch(
      setSortOptions({
        sortOptions: {
          key: 'updated',
          direction: 'asc',
        },
      })
    )
  }

  const onChangeCurrentPageCallback = (currentPage: number) => {
    dispatch(setCurrentPage({ currentPage }))
  }

  const onChangePageSizeCallback = (pageSize: string) => {
    dispatch(setPageSize({ pageSize: Number(pageSize) }))
  }

  return {
    searchName,
    tabValue,
    sliderValues,
    authorId,
    sortOptions,
    currentPage,
    pageSize,
    pageOptions,
    onSearchCallback,
    onChangeTabValueCallback,
    onChangeSliderValueCallback,
    onChangeSortCallback,
    onClearFilterCallback,
    onChangePageSizeCallback,
    onChangeCurrentPageCallback,
  }
}
