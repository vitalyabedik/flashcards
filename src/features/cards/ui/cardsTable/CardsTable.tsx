import { Table, TableHeader } from '@/components'
import { getCardsColumnsData } from '@features/cards/ui/cardsTable/columnsData.ts'

export const CardsTable = (): JSX.Element => {
  return (
    <Table.Root>
      <TableHeader columns={getCardsColumnsData(true)} />
      <Table.Body></Table.Body>
    </Table.Root>
  )
}
