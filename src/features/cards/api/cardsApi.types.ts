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
export type CardResponse = Omit<Card, 'userId'>
export type RandomCardRequest = {
  id: string
  previousCardId?: string
}
export type CardRateRequest = {
  deckId: string
  cardId: string
  grade: number
}
