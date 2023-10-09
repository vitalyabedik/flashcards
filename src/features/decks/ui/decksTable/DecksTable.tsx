import { useMemo, useState } from 'react'

import { columnsData } from './columnsData'
import s from './DecksTable.module.scss'

import { DeleteIcon, EditIcon, PlayCircleIcon } from '@/assets'
import { formatDate, TypographyVariant } from '@/common'
import { Button, Sort, Table, TableHeader, Typography } from '@/components'
import { useGetDecksQuery } from '@/features'

export const DecksTable = (): JSX.Element => {
  const [sort, setSort] = useState<Sort>(null)

  const { data } = useGetDecksQuery()

  const sortedString = useMemo(() => {
    if (!sort) return null

    return `${sort.key}-${sort.direction}`
  }, [sort])

  console.log(sortedString)

  return (
    <>
      {!!data?.items.length && (
        <Table.Root className={s.root}>
          <TableHeader columns={columnsData} sort={sort} onSort={setSort} />
          <Table.Body>
            {data?.items.map(item => (
              <Table.Row key={item.userId}>
                <Table.Cell>
                  {item.cover}
                  <Typography variant={TypographyVariant.Body2}>{item.name}</Typography>
                </Table.Cell>
                <Table.Cell>
                  <Typography variant={TypographyVariant.Body2}>{item.cardsCount}</Typography>
                </Table.Cell>
                <Table.Cell>
                  <Typography variant={TypographyVariant.Body2}>
                    {formatDate(item.updated)}
                  </Typography>
                </Table.Cell>
                <Table.Cell>
                  <Typography variant={TypographyVariant.Body2}>{item.author.name}</Typography>
                </Table.Cell>
                <Table.Cell className={s.iconsWrapper}>
                  <button className={s.tableIcon}>
                    <PlayCircleIcon size={1.6} />
                  </button>
                  <button className={s.tableIcon}>
                    <EditIcon size={1.6} />
                  </button>
                  <button className={s.tableIcon}>
                    <DeleteIcon size={1.6} />
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      )}
      {!data?.items.length && (
        <div className={s.emptyWrapper}>
          <Table.Empty />
          <Button>Add New Deck</Button>
        </div>
      )}
    </>
  )
}
