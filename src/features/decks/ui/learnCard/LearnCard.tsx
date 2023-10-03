import { useState } from 'react'

import s from './LearnCard.module.scss'
import { RateLearnCard } from './rateLearnCard'

import { TypographyVariant } from '@/common'
import { Button, Card, Typography } from '@/components'

type Props = {
  deck: {
    id: string
    name: string
  }
  card: {
    id: string
    question: string
    answer: string
    shots: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
  }
}

export const LearnCard = ({ deck, card }: Props): JSX.Element => {
  const [isShowAnswer, setIsShowAnswer] = useState(false)

  const onShowAnswer = () => {
    setIsShowAnswer(true)
  }

  const onSubmit = (data: unknown) => {
    setIsShowAnswer(false)
    console.log(data)
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
