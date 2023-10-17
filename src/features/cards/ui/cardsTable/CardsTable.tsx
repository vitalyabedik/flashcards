import cn from 'classnames'

import s from './CardsTable.module.scss'

import { formatDate, TypographyVariant } from '@/common'
import { Rating, Sort, Table, TableHeader, Typography } from '@/components'
import { Card, DeleteCard, EditCard, getCardsColumnsData } from '@/features'

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
          const cellIconClassName = cn(
            s.cellIcons,
            (card.answerImg || card.questionImg) && s.cellIconsCover
          )

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
              <Table.Cell>
                <Rating rating={card.rating} />
              </Table.Cell>
              {isOwner && (
                <Table.Cell className={cellIconClassName}>
                  <EditCard card={card} />
                  <DeleteCard id={card.id} />
                </Table.Cell>
              )}
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}
