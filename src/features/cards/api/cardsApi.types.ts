export type CardsResponseType = {
  items: Card[]
  pagination: CardsPagination
}
export type Card = {
  id: string
  deckId: string
  userId: string
  question: string
  answer: string
  shots: number
  answerImg: string | null
  questionImg: string | null
  questionVideo: string
  answerVideo: string
  rating: number
  created: string
  updated: string
}
type CardsPagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}
export type CardsParams = {
  question?: string
  answer?: string
  orderBy?: string
  currentPage?: number
  itemsPerPage?: number
}
