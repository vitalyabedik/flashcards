import { useState } from 'react'

import s from './DecksPage.module.scss'

import { TypographyVariant } from '@/common'
import { Button, Page, Pagination, Panel, Typography } from '@/components'
import { AddDeckModal, DecksTable, useGetDecksQuery } from '@/features'

export const DecksPage = (): JSX.Element => {
  const [search, setSearch] = useState('')
  const [tabValue, setTabValue] = useState('allCards')
  const [sliderValue, setSliderValue] = useState([0, 10])
  const [pageSize, setPageSize] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const optionValues = [
    { value: '10', title: '10' },
    { value: '20', title: '20' },
    { value: '30', title: '30' },
    { value: '40', title: '40' },
    { value: '50', title: '50' },
  ]

  const { currentData: decks } = useGetDecksQuery()

  const onClearFilter = () => {
    setSearch('')
    setTabValue('allCards')
    setSliderValue([0, 10])
  }

  const onChangePageSize = (value: string) => {
    setPageSize(Number(value))
  }

  return (
    <Page className={s.root}>
      {!!decks?.items.length && (
        <>
          <div className={s.titleAndModalWrapper}>
            <Typography className={s.formHeader} variant={TypographyVariant.Large} as="h1">
              Decks list
            </Typography>
            <AddDeckModal
              trigger={
                <Button>
                  <Typography variant={TypographyVariant.Subtitle2} as="span">
                    Add New Deck
                  </Typography>
                </Button>
              }
              buttonTitle="Add New Deck"
              onSubmit={() => {}}
            />
          </div>
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
        </>
      )}
      <DecksTable
        search={search}
        currentPage={currentPage}
        pageSize={pageSize}
        sliderValue={sliderValue}
        tabValue={tabValue}
      />
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
