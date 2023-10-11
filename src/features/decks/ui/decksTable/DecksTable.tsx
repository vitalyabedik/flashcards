import { useMemo, useState } from 'react'

import cn from 'classnames'

import { columnsData } from './columnsData'
import s from './DecksTable.module.scss'

import { PlayCircleIcon } from '@/assets'
import { formatDate, TypographyVariant } from '@/common'
import { Button, IconButton, Sort, Table, TableHeader, Typography } from '@/components'
import { AddDeckModal, useGetDecksQuery, useMeQuery } from '@/features'

type Props = {
  search: string
  currentPage: number
  pageSize: number
  sliderValue: number[]
  tabValue: string
}

export const DecksTable = ({
  search,
  tabValue,
  sliderValue,
  currentPage,
  pageSize,
}: Props): JSX.Element => {
  const [sort, setSort] = useState<Sort>(null)

  const sortedString = useMemo(() => {
    if (!sort) return null

    return `${sort.key}-${sort.direction}`
  }, [sort])
  const { data: meData } = useMeQuery()

  const { data } = useGetDecksQuery({
    name: search,
    authorId: tabValue === 'myCards' ? meData?.id : undefined,
    minCardsCount: String(sliderValue[0]),
    maxCardsCount: String(sliderValue[1]),
    orderBy: sortedString ?? 'updated-desc',
    itemsPerPage: pageSize,
    currentPage,
  })

  console.log(sortedString)

  return (
    <>
      {!!data?.items.length && (
        <Table.Root className={s.root}>
          <TableHeader columns={columnsData} sort={sort} onSort={setSort} />
          <Table.Body>
            {data?.items.map(item => {
              const cellIconClasses = cn(s.cellIcon, item.cover && s.cellIconCover)

              return (
                <Table.Row key={`${item.userId}-${item.updated}`}>
                  <Table.Cell>
                    <div className={s.cell}>
                      {item.cover && <img className={s.image} src={item.cover} alt="deck-cover" />}
                      <Typography variant={TypographyVariant.Body2}>{item.name}</Typography>
                    </div>
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
                  <Table.Cell className={cellIconClasses}>
                    <IconButton icon={<PlayCircleIcon />} size={1.6} />
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table.Root>
      )}
      {!data?.items.length && (
        <div className={s.emptyWrapper}>
          <Table.Empty />
          <AddDeckModal
            trigger={
              <Button>
                <Typography variant={TypographyVariant.Subtitle2} as="span">
                  Add New Deck
                </Typography>
              </Button>
            }
            buttonTitle="Add New Deck"
            onSubmit={() => {}}
          />
        </div>
      )}
    </>
  )
}
