import { useMemo, useState } from 'react'

import s from './DecksTable.module.scss'

import { DeleteIcon, EditIcon, PlayCircleIcon } from '@/assets'
import { TypographyVariant } from '@/common'
import { Button, Sort, TableHeader, Table, Typography } from '@/components'

type Column = {
  key: string
  title: string
  sortable?: boolean
}
const columns: Column[] = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'created',
    title: 'Created by',
  },
  {
    key: 'icons',
    title: '',
  },
]

const columnsSortable: Column[] = columns.map(column =>
  column.key !== 'icons' ? { ...column, sortable: true } : column
)

type DataType = {
  title: string
  cardsCount: number
  updated: string
  createdBy: string
}

type Props = {
  data: DataType[]
}

export const DecksTable = ({ data }: Props): JSX.Element => {
  const [sort, setSort] = useState<Sort>(null)

  const sortedString = useMemo(() => {
    if (!sort) return null

    return `${sort.key}-${sort.direction}`
  }, [sort])

  console.log(sortedString)

  return (
    <>
      {data.length > 0 && (
        <Table.Root>
          <TableHeader columns={columnsSortable} sort={sort} onSort={setSort} />
          <Table.Body>
            {data.map(item => (
              <Table.Row key={item.title}>
                {Object.values(item).map((value, index) => {
                  return (
                    <Table.Cell key={`${value}${index}`}>
                      <Typography variant={TypographyVariant.Body2}>{value}</Typography>
                    </Table.Cell>
                  )
                })}
                <Table.Cell className={s.iconsWrapper}>
                  <PlayCircleIcon size={1.6} />
                  <EditIcon size={1.6} />
                  <DeleteIcon size={1.6} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      )}
      {data.length === 0 && (
        <div className={s.emptyWrapper}>
          <Table.Empty />
          <Button>Add New Deck</Button>
        </div>
      )}
    </>
  )
}
