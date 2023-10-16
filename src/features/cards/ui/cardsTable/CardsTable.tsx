import s from './CardsTable.module.scss'

import { DeleteIcon, EditIcon } from '@/assets'
import { formatDate, TypographyVariant } from '@/common'
import { Rating, Sort, Table, TableHeader, Typography } from '@/components'
import { Card, getCardsColumnsData } from '@/features'
import { EditCard } from '@features/cards/ui/editCard/EditCard.tsx'

type Props = {
  isOwner: boolean
  cards: Card[]
  sort: Sort
  onSort: (value: Sort) => void
}
export const CardsTable = ({ isOwner, cards, sort, onSort }: Props): JSX.Element => {
  return (
    <Table.Root className={s.root}>
      <TableHeader columns={getCardsColumnsData(isOwner)} sort={sort} onSort={onSort} />
      <Table.Body>
        {cards.map(card => {
          return (
            <Table.Row key={card.id}>
              <Table.Cell className={s.cellQuestion}>
                <div className={s.imageWrapper}>
                  {card.questionImg && (
                    <img className={s.image} src={card.questionImg} alt="Card question" />
                  )}
                  <Typography variant={TypographyVariant.Body2}>{card.question}</Typography>
                </div>
              </Table.Cell>
              <Table.Cell className={s.cellAnswer}>
                <div className={s.imageWrapper}>
                  {card.answerImg && (
                    <img className={s.image} src={card.answerImg} alt="Card answer" />
                  )}
                  <Typography variant={TypographyVariant.Body2}>{card.answer}</Typography>
                </div>
              </Table.Cell>
              <Table.Cell className={s.cellUpdated}>
                <Typography variant={TypographyVariant.Body2}>
                  {formatDate(card.updated)}
                </Typography>
              </Table.Cell>
              <Table.Cell className={s.cellGrade}>
                <Rating rating={card.rating} />
              </Table.Cell>
              {isOwner && (
                <Table.Cell className={s.cellIcons}>
                  <EditCard card={card} trigger={<EditIcon />} />

                  <DeleteIcon />
                </Table.Cell>
              )}
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}
