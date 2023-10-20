import { useParams } from 'react-router-dom'

import s from './DeckPage.module.scss'
import { DeckPageHeader } from './deckPageHeader'

import { SearchIcon } from '@/assets'
import { GoBack, Input, Page, Pagination, Table } from '@/components'
import {
  AddCard,
  CardsTable,
  useCardsOptions,
  useGetCardsQuery,
  useGetDeckQuery,
  useMeQuery,
} from '@/features'

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
  } = useCardsOptions()
  const queryParams = {
    id,
    params: { question, orderBy, currentPage, itemsPerPage },
  }
  const { data: user } = useMeQuery()
  const { data: deck } = useGetDeckQuery({ id })
  const { data: deckData } = useGetCardsQuery(queryParams)

  const isOwner = user?.id === deck?.userId
  const isCardsData = deckData?.items.length

  return (
    <Page>
      <GoBack className={s.link} title="Back to Decks List" />
      {deck && <DeckPageHeader isOwner={isOwner} deck={deck} />}
      {!!isCardsData && (
        <>
          <Input
            className={s.input}
            leftIcon={<SearchIcon size={2} />}
            value={question}
            onChangeValue={onChangeQuestion}
            placeholder="Input search"
          />
          <CardsTable isOwner={isOwner} cards={deckData.items} sort={sort} onSort={onChangeSort} />
          <Pagination
            totalCount={deckData.pagination.totalItems}
            pageSize={itemsPerPage}
            currentPage={currentPage}
            onPageChange={onChangePage}
            onValueChange={onChangePageSize}
            value={String(itemsPerPage)}
            options={paginationOptions}
          />
        </>
      )}
      {isOwner && !isCardsData && (
        <Table.Empty>
          <AddCard id={id} />
        </Table.Empty>
      )}
      {!isOwner && !isCardsData && (
        <Table.Empty text="The deck is empty, please go back to learn other decks." />
      )}
    </Page>
  )
}
