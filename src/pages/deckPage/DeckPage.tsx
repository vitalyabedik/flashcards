import { useMemo, useState } from 'react'

import { useParams } from 'react-router-dom'

import { DeckPageHeader } from './deckPageHeader'

import { SearchIcon } from '@/assets'
import { Button, GoBack, Input, Page, Pagination, Sort, Table } from '@/components'
import { CardsTable, useGetCardsQuery, useGetDeckQuery, useMeQuery } from '@/features'

// Вынести  отдельно, повторяется в Decks Page
const optionValues = [
  { value: '10', title: '10' },
  { value: '20', title: '20' },
  { value: '30', title: '30' },
  { value: '40', title: '40' },
  { value: '50', title: '50' },
]

export const DeckPage = (): JSX.Element => {
  const { id = '' } = useParams<{ id: string }>()
  const [question, setQuestion] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [sort, setSort] = useState<Sort>(null)

  const orderBy =
    useMemo(() => {
      if (!sort) return null

      return `${sort.key}-${sort.direction}`
    }, [sort]) || 'updated-desc'

  const queryParams = {
    id,
    params: { question, orderBy, currentPage, itemsPerPage },
  }
  const { data: user } = useMeQuery()
  const { data: deck } = useGetDeckQuery({ id })
  const { data: deckData } = useGetCardsQuery(queryParams)

  const isOwner = user?.id === deck?.userId
  const isCardsData = deckData?.items.length

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const onPageSizeChange = (value: string) => {
    setItemsPerPage(Number(value))
  }

  return (
    <Page>
      <GoBack title="Back to Decks List" />
      {!!isCardsData && (
        <>
          <DeckPageHeader id={id} isOwner={isOwner} />
          <Input
            leftIcon={<SearchIcon size={2} placeholder="Input search" />}
            value={question}
            onChangeValue={setQuestion}
          />
          <CardsTable isOwner={isOwner} cards={deckData.items} sort={sort} onSort={setSort} />
          <Pagination
            totalCount={deckData.pagination.totalItems}
            pageSize={itemsPerPage}
            currentPage={currentPage}
            onPageChange={onPageChange}
            onValueChange={onPageSizeChange}
            value={String(itemsPerPage)}
            options={optionValues}
          />
        </>
      )}
      {!isCardsData && (
        <Table.Empty>
          <Button>Add new Card</Button>
        </Table.Empty>
      )}
    </Page>
  )
}
