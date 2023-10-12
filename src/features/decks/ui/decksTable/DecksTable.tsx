import cn from 'classnames'

import { columnsData } from './columnsData'
import s from './DecksTable.module.scss'

import { DeleteIcon, EditIcon, PlayCircleIcon } from '@/assets'
import { formatDate, TypographyVariant } from '@/common'
import { Dialog, IconButton, Sort, Table, TableHeader, Typography } from '@/components'
import { DecksResponseType, useDeleteDeckMutation, useMeQuery } from '@/features'

type Props = {
  decksData: DecksResponseType
  sort: Sort
  onSort: (sort: Sort) => void
}

export const DecksTable = ({ decksData, sort, onSort }: Props): JSX.Element => {
  const [deleteDeck] = useDeleteDeckMutation()
  const { data: user } = useMeQuery()

  const deleteDeckCallback = (id: string) => {
    deleteDeck({ id })
  }

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
                    <div className={s.cellImage}>
                      {item.cover && <img className={s.image} src={item.cover} alt="deck-cover" />}
                      <Typography variant={TypographyVariant.Body2}>{item.name}</Typography>
                    </div>
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
                    <IconButton icon={<PlayCircleIcon />} size={1.6} />
                    {user?.id === item.author.id && (
                      <>
                        <IconButton icon={<EditIcon />} size={1.6} />
                        <Dialog
                          trigger={<IconButton icon={<DeleteIcon />} size={1.6} />}
                          modalHeaderTitle="Delete Deck"
                          itemName={item.name}
                          action="removeDeck"
                          buttonTitle="Delete Deck"
                          onClick={() => deleteDeckCallback(item.id)}
                        />
                      </>
                    )}
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
