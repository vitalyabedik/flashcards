import { Table, TableHeader } from '@/components'
import { useGetCardsQuery } from '@features/cards/api/cardsApi.ts'
import { getCardsColumnsData } from '@features/cards/ui/cardsTable/columnsData.ts'

export const CardsTable = (): JSX.Element => {
  const { data } = useGetCardsQuery()

  return (
    <Table.Root>
      <TableHeader columns={getCardsColumnsData(true)} />
      <Table.Body></Table.Body>
    </Table.Root>
  )
}
