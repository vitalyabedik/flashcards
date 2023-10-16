import { useState } from 'react'

import { useParams } from 'react-router-dom'

import s from './LearnCard.module.scss'
import { RateLearnCard, RateLearnCardValues } from './rateLearnCard'

import { TypographyVariant } from '@/common'
import { Button, Card, Typography } from '@/components'
import { useGetDeckQuery, useGetRandomCardQuery, useRateCardMutation } from '@/features'

export const LearnCard = (): JSX.Element => {
  const [isShowAnswer, setIsShowAnswer] = useState(false)

  const [rateCard] = useRateCardMutation()

  const params = useParams()
  const id = params.id as string
  const { data: deck } = useGetDeckQuery({ id })
  const { data: card } = useGetRandomCardQuery({ id })

  const onShowAnswer = () => {
    setIsShowAnswer(true)
  }

  const onSubmit = (data: RateLearnCardValues) => {
    setIsShowAnswer(false)
    rateCard({ deckId: id, cardId: card!.id, grade: Number(data.grade) })
  }

  return (
    <Card className={s.root}>
      <Typography className={s.title} variant={TypographyVariant.Large} as="h2">
        Learn {deck?.name}
      </Typography>
      <Typography className={s.question}>
        <b>Question:</b> {card?.question}
      </Typography>
      {card?.questionImg && (
        <div className={s.imgWrapper}>
          <img src={card.questionImg} alt="question" />
        </div>
      )}
      <Typography className={s.shots} variant={TypographyVariant.Body2}>
        Number of attempts: <b>{card?.shots}</b>
      </Typography>

      {isShowAnswer ? (
        <>
          <Typography className={s.answer}>
            <b>Answer:</b> {card?.answer}
          </Typography>
          {card?.answerImg && (
            <div className={s.imgWrapper}>
              <img src={card.answerImg} alt="answer" />
            </div>
          )}
          <Typography className={s.rate} variant={TypographyVariant.Subtitle1}>
            Rate yourself:
          </Typography>
          <RateLearnCard onSubmit={onSubmit} />
        </>
      ) : (
        <Button onClick={onShowAnswer} fullWidth>
          Show Answer
        </Button>
      )}
    </Card>
  )
}
