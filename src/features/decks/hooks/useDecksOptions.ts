import { useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/common'
import { Sort } from '@/components'
import {
  CardsCountType,
  selectSearchName,
  selectTabValue,
  selectCardsCount,
  selectAuthorId,
  selectCurrentPage,
  selectPageSize,
  selectSortOptions,
  selectPageOptions,
  decksActions,
  useMeQuery,
} from '@/features'

export const useDecksOptions = () => {
  const searchName = useAppSelector(selectSearchName)
  const tabValue = useAppSelector(selectTabValue)
  const cardsCount = useAppSelector(selectCardsCount)
  const authorId = useAppSelector(selectAuthorId)
  const sortOptions = useAppSelector(selectSortOptions)
  const currentPage = useAppSelector(selectCurrentPage)
  const pageSize = useAppSelector(selectPageSize)
  const pageOptions = useAppSelector(selectPageOptions)

  const [sliderRangeValue, setSliderRangeValue] = useState<CardsCountType>({
    min: 0,
    max: undefined,
  })

  const {
    setSearchByName,
    setTabValue,
    setCardsCount,
    setAuthorId,
    setSortOptions,
    setCurrentPage,
    setPageSize,
    resetCurrentPage,
    clearFilters,
  } = decksActions

  const dispatch = useAppDispatch()

  const { data: user } = useMeQuery()

  const onSearchCallback = (name: string) => {
    dispatch(setSearchByName({ searchName: name }))
    dispatch(resetCurrentPage())
  }

  const onChangeTabValueCallback = (tabValue: string) => {
    dispatch(resetCurrentPage())
    dispatch(setTabValue({ tabValue }))

    if (tabValue === 'my') {
      dispatch(setAuthorId({ authorId: user?.id }))
    } else {
      dispatch(setAuthorId({ authorId: undefined }))
    }
  }

  const onChangeSliderValueCallback = (sliderValues: number[]) => {
    dispatch(resetCurrentPage())
    setSliderRangeValue({ min: sliderValues[0], max: sliderValues[1] })
    setCardsCount({ cardsCount: { min: sliderValues[0], max: sliderValues[1] } })
  }

  const onChangeSortCallback = (orderBy: Sort) => {
    dispatch(setSortOptions({ sortOptions: orderBy }))
  }

  const onClearFilterCallback = () => {
    dispatch(clearFilters())
    setSliderRangeValue({ min: 0, max: undefined })
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
    cardsCount,
    sliderRangeValue,
    authorId,
    sortOptions,
    currentPage,
    pageSize,
    pageOptions,
    onSearchCallback,
    onChangeTabValueCallback,
    setCardsCount,
    onChangeSliderValueCallback,
    onChangeSortCallback,
    onClearFilterCallback,
    onChangePageSizeCallback,
    onChangeCurrentPageCallback,
  }
}
