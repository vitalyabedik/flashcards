import s from './DecksPage.module.scss'
import { DecksPageHeader } from './decksPageHeader'

import { formatSortedString, useDebounce } from '@/common'
import { Page, Pagination, Panel } from '@/components'
import { DecksTable, useDecksPagination, useGetDecksQuery, useDecksFilters } from '@/features'

export const DecksPage = (): JSX.Element => {
  const {
    searchName,
    tabValue,
    sliderValues,
    authorId,
    sortOptions,
    onSearchCallback,
    onChangeTabValueCallback,
    onChangeSliderValueCallback,
    onChangeSortCallback,
    onClearFilterCallback,
  } = useDecksFilters()

  const {
    currentPage,
    pageSize,
    pageOptions,
    onChangePageSizeCallback,
    onChangeCurrentPageCallback,
  } = useDecksPagination()

  const debouncedSearchName = useDebounce(searchName, 1500)
  const sortedString = formatSortedString(sortOptions)

  const { currentData: decks } = useGetDecksQuery({
    name: debouncedSearchName,
    authorId,
    minCardsCount: sliderValues[0],
    maxCardsCount: sliderValues[1],
    orderBy: sortedString,
    itemsPerPage: pageSize,
    currentPage,
  })

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
