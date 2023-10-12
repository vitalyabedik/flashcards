import cn from 'classnames'
import { Link } from 'react-router-dom'

import { columnsData } from './columnsData'
import s from './DecksTable.module.scss'
import { DecksTableIcons } from './decksTableIcons'

import { formatDate, Route, TypographyVariant } from '@/common'
import { Sort, Table, TableHeader, Typography } from '@/components'
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
            {decksData?.items.map(item => {
              const cellIconClasses = cn(s.cellIcon, item.cover && s.cellIconCover)

              return (
                <Table.Row key={`${item.userId}-${item.updated}`}>
                  <Table.Cell className={s.cellName}>
                    <Link to={`${Route.Decks}/${item.id}`}>
                      <div className={s.cellImage}>
                        {item.cover && (
                          <img className={s.image} src={item.cover} alt="deck-cover" />
                        )}
                        <Typography variant={TypographyVariant.Body2}>{item.name}</Typography>
                      </div>
                    </Link>
                  </Table.Cell>
                  <Table.Cell className={s.cellCardsCount}>
                    <Typography variant={TypographyVariant.Body2}>{item.cardsCount}</Typography>
                  </Table.Cell>
                  <Table.Cell className={s.cellUpdated}>
                    <Typography variant={TypographyVariant.Body2}>
                      {formatDate(item.updated)}
                    </Typography>
                  </Table.Cell>
                  <Table.Cell className={s.cellAuthor}>
                    <Typography variant={TypographyVariant.Body2}>{item.author.name}</Typography>
                  </Table.Cell>
                  <Table.Cell className={cellIconClasses}>
                    <DecksTableIcons deck={item} />
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
