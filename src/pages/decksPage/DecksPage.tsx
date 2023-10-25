import { useEffect } from 'react'

import s from './DecksPage.module.scss'
import { DecksPageHeader } from './decksPageHeader'

import { formatSortedString, useDebounce } from '@/common'
import { Page, Pagination, Panel, Preloader } from '@/components'
import { DecksTable, useDecksOptions, useGetDecksQuery } from '@/features'

export const DecksPage = (): JSX.Element => {
  const {
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
    onChangeSliderValueCallback,
    onChangeSortCallback,
    onClearFilterCallback,
    onChangePageSizeCallback,
    onChangeCurrentPageCallback,
  } = useDecksOptions()

  const debouncedSearchName = useDebounce(searchName)
  const debouncedSliderRangeValue = useDebounce(sliderRangeValue)

  const sortedString = formatSortedString(sortOptions)

  let { data, currentData, isLoading, isFetching } = useGetDecksQuery({
    name: debouncedSearchName,
    authorId,
    minCardsCount: debouncedSliderRangeValue.min,
    maxCardsCount: debouncedSliderRangeValue.max,
    orderBy: sortedString,
    itemsPerPage: pageSize,
    currentPage,
  })

  if (!currentData && data) {
    currentData = { ...data }
  }

  useEffect(() => {
    if (
      debouncedSliderRangeValue.max === undefined ||
      debouncedSliderRangeValue.max === null ||
      debouncedSliderRangeValue.max !== currentData?.maxCardsCount
    ) {
      onChangeSliderValueCallback([0, currentData?.maxCardsCount ?? 0])
    }
  }, [currentData?.maxCardsCount])

  const loadingStatus = isLoading || isFetching

  return (
    <Page className={s.root}>
      <DecksPageHeader isDisabled={loadingStatus} />
      <Panel
        className={s.panelWrapper}
        inputValue={searchName}
        onChangeInputValue={onSearchCallback}
        tabValue={tabValue}
        tabLabel="Show decks cards"
        sliderValue={[
          sliderRangeValue?.min ?? 0,
          sliderRangeValue?.max ?? currentData?.maxCardsCount ?? 0,
        ]}
        onChangeTabValue={onChangeTabValueCallback}
        minSliderValue={cardsCount.min}
        maxSliderValue={Number(data?.maxCardsCount)}
        sliderLabel="Number of cards"
        onChangeSliderValue={onChangeSliderValueCallback}
        onClearFilter={onClearFilterCallback}
        isDisabled={loadingStatus}
      />
      {loadingStatus && <Preloader />}
      {currentData && currentData.items.length > 0 && (
        <>
          <DecksTable
            decksData={currentData}
            sort={sortOptions}
            onSort={onChangeSortCallback}
            isDisabled={loadingStatus}
          />
          <Pagination
            totalCount={currentData?.pagination.totalItems || 10}
            pageSize={pageSize}
            currentPage={currentPage}
            value={String(pageSize)}
            onPageChange={onChangeCurrentPageCallback}
            onValueChange={onChangePageSizeCallback}
            options={pageOptions}
          />
        </>
      )}
    </Page>
  )
}
