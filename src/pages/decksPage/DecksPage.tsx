import { useState } from 'react'

import s from './DecksPage.module.scss'

import { TypographyVariant } from '@/common'
import { Button, Page, Panel, Typography } from '@/components'
import { AddDeckModal, DecksTable } from '@/features'

const data = [
  {
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
  },
  {
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
  },
  {
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
  },
  {
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
  },
  {
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
  },
]

export const DecksPage = (): JSX.Element => {
  const [inputValue, setValue] = useState('')
  const [tabValue, setTabValue] = useState('allCards')
  const [sliderValue, setSliderValue] = useState([1, 10])

  const onClearFilter = () => {
    setValue('')
    setTabValue('allCards')
    setSliderValue([1, 10])
  }

  return (
    <Page className={s.root}>
      {data.length > 0 && (
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
      <DecksTable data={data} />
    </Page>
  )
}
