import { useMemo, useState } from 'react'

import s from './DecksPage.module.scss'
import { DecksPageHeader } from './decksPageHeader'

import { Page, Pagination, Panel, Sort } from '@/components'
import { DecksTable, useGetDecksQuery, useMeQuery } from '@/features'

export const DecksPage = (): JSX.Element => {
  const [search, setSearch] = useState('')
  const [tabValue, setTabValue] = useState('all')
  const [sliderValue, setSliderValue] = useState([0, 10])
  const [sort, setSort] = useState<Sort>(null)
  const [pageSize, setPageSize] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const optionValues = [
    { value: '10', title: '10' },
    { value: '20', title: '20' },
    { value: '30', title: '30' },
    { value: '40', title: '40' },
    { value: '50', title: '50' },
  ]

  const sortedString = useMemo(() => {
    if (!sort) return null

    return `${sort.key}-${sort.direction}`
  }, [sort])

  const { data: user } = useMeQuery()
  const { data: decks } = useGetDecksQuery({
    name: search,
    authorId: tabValue === 'my' ? user?.id : undefined,
    minCardsCount: String(sliderValue[0]),
    maxCardsCount: String(sliderValue[1]),
    orderBy: sortedString ?? 'updated-desc',
    itemsPerPage: pageSize,
    currentPage,
  })

  const onClearFilter = () => {
    setSearch('')
    setTabValue('all')
    setSliderValue([0, 10])
  }

  const onChangePageSize = (value: string) => {
    setPageSize(Number(value))
  }

  return (
    <Page className={s.root}>
      <DecksPageHeader />
      <Panel
        className={s.panelWrapper}
        inputValue={search}
        onChangeInputValue={setSearch}
        tabValue={tabValue}
        tabLabel="Show packs cards"
        sliderValue={sliderValue}
        onChangeTabValue={setTabValue}
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
          onPageChange={setCurrentPage}
          onValueChange={onChangePageSize}
          options={optionValues}
        />
      )}
    </Page>
  )
}
