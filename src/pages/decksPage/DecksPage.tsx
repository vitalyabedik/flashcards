import { useMemo, useState } from 'react'

import s from './DecksPage.module.scss'
import { DecksPageHeader } from './decksPageHeader'

import { Page, Pagination, Panel, Sort } from '@/components'
import {
  DecksTable,
  selectSearchByName,
  selectSliderValues,
  selectTabValue,
  selectCurrentPage,
  selectPageSize,
  selectPageOptions,
  useGetDecksQuery,
  useMeQuery,
  decksActions,
} from '@/features'
import { useAppDispatch, useAppSelector } from '@common/hooks'

export const DecksPage = (): JSX.Element => {
  const searchByName = useAppSelector(selectSearchByName)
  const tabValue = useAppSelector(selectTabValue)
  const sliderValues = useAppSelector(selectSliderValues)
  const currentPage = useAppSelector(selectCurrentPage)
  const pageSize = useAppSelector(selectPageSize)
  const pageOptions = useAppSelector(selectPageOptions)

  const dispatch = useAppDispatch()

  const [sort, setSort] = useState<Sort>(null)
  const [filterValue, setFilterValue] = useState(tabValue)
  const [sliderValue, setSliderValue] = useState(sliderValues)

  const sortedString = useMemo(() => {
    if (!sort) return null

    return `${sort.key}-${sort.direction}`
  }, [sort])

  const { data: user } = useMeQuery()
  const { data: decks } = useGetDecksQuery({
    name: searchByName,
    authorId: filterValue === 'my' ? user?.id : undefined,
    minCardsCount: String(sliderValue[0]),
    maxCardsCount: String(sliderValue[1]),
    orderBy: sortedString ?? 'updated-desc',
    itemsPerPage: pageSize,
    currentPage,
  })

  const onClearFilter = () => {
    dispatch(decksActions.setSearchByName({ searchByName: '' }))
    setFilterValue('all')
    setSliderValue([0, 10])
  }

  const onSearchCallback = (value: string) => {
    dispatch(decksActions.setSearchByName({ searchByName: value }))
  }

  const onChangeCurrentPageCallback = (value: number) => {
    dispatch(decksActions.setCurrentPage({ currentPage: value }))
  }

  const onChangePageSizeCallback = (value: string) => {
    dispatch(decksActions.setPageSize({ pageSize: Number(value) }))
  }

  return (
    <Page className={s.root}>
      <DecksPageHeader />
      <Panel
        className={s.panelWrapper}
        inputValue={searchByName}
        onChangeInputValue={onSearchCallback}
        tabValue={filterValue}
        tabLabel="Show packs cards"
        sliderValue={sliderValue}
        onChangeTabValue={setFilterValue}
        minSliderValue={0}
        maxSliderValue={10}
        sliderLabel="Number of cards"
        onChangeSliderValue={setSliderValue}
        onClearFilter={onClearFilter}
      />
      {decks && <DecksTable decksData={decks} sort={sort} onSort={setSort} />}
      {!!decks?.items.length && (
        <Pagination
          totalCount={decks?.pagination.totalItems ?? 10}
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
