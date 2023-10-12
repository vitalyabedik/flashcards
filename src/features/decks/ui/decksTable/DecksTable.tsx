import cn from 'classnames'

import { columnsData } from './columnsData'
import s from './DecksTable.module.scss'

import { PlayCircleIcon } from '@/assets'
import { formatDate, TypographyVariant } from '@/common'
import { IconButton, Sort, Table, TableHeader, Typography } from '@/components'
import { DecksResponseType } from '@/features'

type Props = {
  decksData: DecksResponseType
  sort: Sort
  onSort: (sort: Sort) => void
}

export const DecksTable = ({ decksData, sort, onSort }: Props): JSX.Element => {
  return (
    <>
      {!!decksData?.items.length && (
        <Table.Root className={s.root}>
          <TableHeader columns={columnsData} sort={sort} onSort={onSort} />
          <Table.Body>
            {decksData?.items.map((item: any) => {
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
      {!decksData?.items.length && (
        <Table.Empty text="Your Decks list is empty. Click Add New Deck to fill this deck." />
      )}
    </>
  )
}
