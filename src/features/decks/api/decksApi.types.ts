export type DecksResponseType = {
  maxCardsCount: number
  pagination: Pagination
  items: Deck[]
}

type Pagination = {
  totalPages: number
  currentPage: number
  itemsPerPage: number
  totalItems: number
}

type Author = {
  id: string
  name: string
}

type Deck = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover: string | null
  rating: number
  isDeleted?: boolean | null
  isBlocked?: boolean | null
  created: string
  updated: string
  cardsCount: number
  author: Author
}

type FieldType = 'name' | 'card' | 'updated' | 'created'
type DirectionType = 'asc' | 'desc'

export type GetDecksParamsType = {
  minCardsCount?: string
  maxCardsCount?: string
  name?: string
  authorId?: string
  orderBy?: `${FieldType}-${DirectionType}`
  currentPage?: number
  itemsPerPage?: number
}

export type SortType = Pick<GetDecksParamsType, 'orderBy'>
