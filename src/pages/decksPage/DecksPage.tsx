import s from './DecksPage.module.scss'
import { DecksPageHeader } from './decksPageHeader'

import { formatSortedString, useAppDispatch, useAppSelector, useDebounce } from '@/common'
import { Page, Pagination, Panel, Sort } from '@/components'
import {
  DecksTable,
  selectSearchName,
  selectTabValue,
  selectSliderValues,
  selectAuthorId,
  selectSortOptions,
  selectCurrentPage,
  selectPageSize,
  selectPageOptions,
  useGetDecksQuery,
  useMeQuery,
  decksActions,
} from '@/features'

export const DecksPage = (): JSX.Element => {
  const searchName = useAppSelector(selectSearchName)
  const tabValue = useAppSelector(selectTabValue)
  const sliderValues = useAppSelector(selectSliderValues)
  const authorId = useAppSelector(selectAuthorId)
  const sortOptions = useAppSelector(selectSortOptions)
  const currentPage = useAppSelector(selectCurrentPage)
  const pageSize = useAppSelector(selectPageSize)
  const pageOptions = useAppSelector(selectPageOptions)

  const dispatch = useAppDispatch()

  const debouncedSearchName = useDebounce(searchName, 1500)
  const sortedString = formatSortedString(sortOptions)

  const { data: user } = useMeQuery()
  const { currentData: decks } = useGetDecksQuery({
    name: debouncedSearchName,
    authorId,
    minCardsCount: sliderValues[0],
    maxCardsCount: sliderValues[1],
    orderBy: sortedString,
    itemsPerPage: pageSize,
    currentPage,
  })

  const onSearchCallback = (name: string) => {
    dispatch(decksActions.setSearchByName({ searchName: name }))
  }

  const onChangeTabValueCallback = (tabValue: string) => {
    dispatch(decksActions.setTabValue({ tabValue }))

    if (tabValue === 'my') {
      dispatch(decksActions.setAuthorId({ authorId: user?.id }))
    } else {
      dispatch(decksActions.setAuthorId({ authorId: undefined }))
    }
  }

  const onChangeSliderValueCallback = (sliderValues: number[]) => {
    dispatch(decksActions.setSliderValues({ sliderValues }))
  }

  const onChangeSortCallback = (orderBy: Sort) => {
    dispatch(decksActions.setSortOptions({ sortOptions: orderBy }))
  }

  const onChangeCurrentPageCallback = (currentPage: number) => {
    dispatch(decksActions.setCurrentPage({ currentPage }))
  }

  const onChangePageSizeCallback = (pageSize: string) => {
    dispatch(decksActions.setPageSize({ pageSize: Number(pageSize) }))
  }

  const onClearFilter = () => {
    dispatch(decksActions.setSearchByName({ searchName: '' }))
    dispatch(decksActions.setTabValue({ tabValue: 'all' }))
    dispatch(decksActions.setSliderValues({ sliderValues: [0, 10] }))
    dispatch(decksActions.setAuthorId({ authorId: undefined }))
    dispatch(
      decksActions.setSortOptions({
        sortOptions: {
          key: 'updated',
          direction: 'asc',
        },
      })
    )
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
        onClearFilter={onClearFilter}
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
