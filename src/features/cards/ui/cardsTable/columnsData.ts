import { Column } from '@/components'

export const columnsData: Column[] = [
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
  if (isOwner) return columnsData

  return columnsData.slice(0, columnsData.length - 1)
}
