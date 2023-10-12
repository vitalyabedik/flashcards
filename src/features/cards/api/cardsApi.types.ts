export type CardsResponseType = {
  items: Card[]
  pagination: CardsPagination
}
type Card = {
  id: string
  deckId: string
  userId: string
  question: string
  answer: string
  shots: number
  answerImg: string
  questionImg: string
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
