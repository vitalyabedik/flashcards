import { useState } from 'react'

import { useParams } from 'react-router-dom'

import { DeckPageHeader } from './deckPageHeader'

import { Button, GoBack, Page, Table } from '@/components'
import { CardsTable, useGetDeckQuery, useMeQuery } from '@/features'
import { useGetCardsQuery } from '@features/cards/api/cardsApi.ts'

export const DeckPage = (): JSX.Element => {
  const { id = '' } = useParams<{ id: string }>()
  const [question, setQuestion] = useState('')
  const [orderBy, setOrderBy] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setitemsPerPage] = useState(10)

  const queryParams = {
    id,
    params: { question, orderBy, currentPage, itemsPerPage },
  }
  const { data: user } = useMeQuery()
  const { data: deck } = useGetDeckQuery({ id })
  const { data: deckData } = useGetCardsQuery(queryParams)

  const isOwner = user?.id === deck?.userId

  if (!deckData?.items.length) {
    return (
      <Page>
        <GoBack title="Back to Decks List" />
        <Table.Empty>
          <Button>Add new Card</Button>
        </Table.Empty>
      </Page>
    )
  }

  return (
    <Page>
      <GoBack title="Back to Decks List" />
      <DeckPageHeader id={id} isOwner={isOwner} />
      <CardsTable isOwner={isOwner} cards={deckData?.items} />
    </Page>
  )
}
