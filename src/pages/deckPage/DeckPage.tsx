import { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import s from './DeckPage.module.scss'
import { DeckPageHeader } from './deckPageHeader'

import { SearchIcon } from '@/assets'
import { useDebounce } from '@/common'
import { GoBack, Input, Page, Pagination, Table } from '@/components'
import {
  AddCard,
  CardsTable,
  useCardsOptions,
  useGetCardsQuery,
  useGetDeckQuery,
  useMeQuery,
} from '@/features'
import { LinearProgressBar } from '@components/ui/linearProgressBar'

export const DeckPage = (): JSX.Element => {
  const { id = '' } = useParams<{ id: string }>()
  const {
    question,
    sort,
    orderBy,
    currentPage,
    itemsPerPage,
    paginationOptions,
    onChangeQuestion,
    onChangePage,
    onChangePageSize,
    onChangeSort,
    onSetInitialState,
  } = useCardsOptions()
  const queryParams = {
    id,
    params: { question: useDebounce(question, 300), orderBy, currentPage, itemsPerPage },
  }

  useEffect(() => {
    return () => onSetInitialState()
  }, [])
  const { data: user } = useMeQuery()
  const { data: deck } = useGetDeckQuery({ id })
  const { data: deckData, isLoading, isFetching } = useGetCardsQuery(queryParams)

  const isOwner = user?.id === deck?.userId
  const isEmptyCard = deck && deck.cardsCount > 0
  const loadingStatus = isLoading || isFetching

  return (
    <>
      {loadingStatus && <LinearProgressBar />}
      <Page>
        <GoBack className={s.link} title="Back to Decks List" />
        {deck && <DeckPageHeader isOwner={isOwner} deck={deck} isEmptyCard={!!isEmptyCard} />}
        {isEmptyCard && (
          <>
            <Input
              className={s.input}
              leftIcon={<SearchIcon size={2} />}
              value={question}
              onChangeValue={onChangeQuestion}
              placeholder="Input search"
            />
            <CardsTable
              isOwner={isOwner}
              cards={deckData?.items || []}
              sort={sort}
              onSort={onChangeSort}
            />
            <Pagination
              totalCount={deckData?.pagination.totalItems || 0}
              pageSize={itemsPerPage}
              currentPage={currentPage}
              onPageChange={onChangePage}
              onValueChange={onChangePageSize}
              value={String(itemsPerPage)}
              options={paginationOptions}
            />
          </>
        )}
        {isOwner && !isEmptyCard && (
          <Table.Empty>
            <AddCard />
          </Table.Empty>
        )}
        {!isOwner && !isEmptyCard && !loadingStatus && (
          <Table.Empty text="The deck is empty, please go back to learn other decks." />
        )}
      </Page>
    </>
  )
}
