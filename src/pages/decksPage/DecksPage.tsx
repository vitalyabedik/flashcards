import s from './DecksPage.module.scss'
import { DecksPageHeader } from './decksPageHeader'

import { Loading } from '@/assets'
import { formatSortedString, useDebounce } from '@/common'
import { Page, Pagination, Panel } from '@/components'
import { DecksTable, useDecksOptions, useGetDecksQuery } from '@/features'
import { toast } from 'react-toastify'

export const DecksPage = (): JSX.Element => {
  const {
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
  } = useDecksOptions()

  let delay

  if (searchName === '') {
    delay = 0
  } else {
    delay = 1500
  }

  const debouncedSearchName = useDebounce(searchName, delay)
  const sortedString = formatSortedString(sortOptions)

  const {
    currentData: decks,
    isLoading,
    isFetching,
    error,
  } = useGetDecksQuery({
    name: debouncedSearchName,
    authorId,
    minCardsCount: sliderValues[0],
    maxCardsCount: sliderValues[1],
    orderBy: sortedString,
    itemsPerPage: pageSize,
    currentPage,
  })

  if (error) {
    toast.error(error.data)
  }

  return (
    <Page className={s.root}>
      <DecksPageHeader />
      <Panel
        className={s.panelWrapper}
        inputValue={searchName}
        onChangeInputValue={onSearchCallback}
        tabValue={tabValue}
        tabLabel="Show packs cards"
        sliderValue={sliderValues}
        onChangeTabValue={onChangeTabValueCallback}
        minSliderValue={0}
        maxSliderValue={10}
        sliderLabel="Number of cards"
        onChangeSliderValue={onChangeSliderValueCallback}
        onClearFilter={onClearFilterCallback}
      />
      {decks && <DecksTable decksData={decks} sort={sortOptions} onSort={onChangeSortCallback} />}
      {isFetching && !isLoading && <Loading />}
      {!!decks?.items.length && (
        <Pagination
          totalCount={decks?.pagination.totalItems || 10}
          pageSize={pageSize}
          currentPage={currentPage}
          value={String(pageSize)}
          onPageChange={onChangeCurrentPageCallback}
          onValueChange={onChangePageSizeCallback}
          options={pageOptions}
        />
      )}
    </Page>
  )
}
