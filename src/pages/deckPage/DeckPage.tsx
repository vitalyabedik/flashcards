import { useParams } from 'react-router-dom'

import s from './DeckPage.module.scss'
import { DeckPageHeader } from './deckPageHeader'

import { SearchIcon } from '@/assets'
import { formatSortedString, useAppDispatch, useAppSelector } from '@/common'
import { GoBack, Input, Page, Pagination, Sort, Table } from '@/components'
import {
  AddCard,
  cardsActions,
  CardsTable,
  selectCardsCurrentPage,
  selectCardsPageSize,
  selectCardsPaginationOptions,
  selectCardsQuestion,
  selectCardsSortParams,
  useGetCardsQuery,
  useGetDeckQuery,
  useMeQuery,
} from '@/features'

export const DeckPage = (): JSX.Element => {
  const { id = '' } = useParams<{ id: string }>()

  const dispatch = useAppDispatch()

  const question = useAppSelector(selectCardsQuestion)
  const currentPage = useAppSelector(selectCardsCurrentPage)
  const itemsPerPage = useAppSelector(selectCardsPageSize)
  const sort = useAppSelector(selectCardsSortParams)
  const paginationOptions = useAppSelector(selectCardsPaginationOptions)
  const orderBy = formatSortedString(sort)
  const queryParams = {
    id,
    params: { question, orderBy, currentPage, itemsPerPage },
  }
  const { data: user } = useMeQuery()
  const { data: deck } = useGetDeckQuery({ id })
  const { data: deckData } = useGetCardsQuery(queryParams)

  const isOwner = user?.id === deck?.userId
  const isCardsData = deckData?.items.length

  const onChangeQuestion = (searchQuestion: string) => {
    dispatch(cardsActions.setSearchByQuestion({ searchQuestion }))
  }
  const onChangePage = (currentPage: number) => {
    dispatch(cardsActions.setCurrentPage({ currentPage }))
  }
  const onChangePageSize = (value: string) => {
    dispatch(cardsActions.setPageSize({ pageSize: Number(value) }))
  }
  const onChangeSort = (sortParams: Sort) => {
    dispatch(cardsActions.setSortOrderBy({ sortParams }))
  }

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
