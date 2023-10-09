import { useState } from 'react'

import s from './DecksPage.module.scss'

import { TypographyVariant } from '@/common'
import { Button, Page, Pagination, Panel, Typography } from '@/components'
import { AddDeckModal, DecksTable, useGetDecksQuery } from '@/features'

export const DecksPage = (): JSX.Element => {
  const [inputValue, setValue] = useState('')
  const [tabValue, setTabValue] = useState('allCards')
  const [sliderValue, setSliderValue] = useState([1, 10])

  const { data } = useGetDecksQuery()

  const onClearFilter = () => {
    setValue('')
    setTabValue('allCards')
    setSliderValue([1, 10])
  }

  return (
    <Page className={s.root}>
      {!!data?.items.length && (
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
            inputValue={inputValue}
            onChangeInputValue={setValue}
            tabValue={tabValue}
            tabLabel="Show packs cards"
            sliderValue={sliderValue}
            onChangeTabValue={setTabValue}
            minSliderValue={1}
            maxSliderValue={10}
            sliderLabel="Number of cards"
            onChangeSliderValue={setSliderValue}
            onClearFilter={onClearFilter}
          />
        </>
      )}
      <DecksTable />
      <Pagination
        totalCount={87}
        pageSize={10}
        currentPage={1}
        onPageChange={() => {}}
        options={[
          { value: '10', title: '10' },
          { value: '20', title: '20' },
          { value: '30', title: '30' },
          { value: '40', title: '40' },
          { value: '50', title: '50' },
        ]}
        placeholder={100}
      />
    </Page>
  )
}
