import { Column } from '@/components'

export const cardsColumnsData: Column[] = [
  {
    key: 'question',
    title: 'Question',
    sortable: true,
  },
  {
    key: 'answer',
    title: 'Answer',
    sortable: true,
  },
  {
    key: 'updated',
    title: 'Last Updated',
    sortable: true,
  },
  {
    key: 'grade',
    title: 'Grade',
    sortable: true,
  },
  {
    key: 'icons',
    title: '',
  },
]

export const getCardsColumnsData = (isOwner: boolean) => {
  if (isOwner) return cardsColumnsData

  return cardsColumnsData.slice(0, cardsColumnsData.length - 1)
}
