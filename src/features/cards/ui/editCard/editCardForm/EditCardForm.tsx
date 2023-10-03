import { ReactNode } from 'react'

import { DevTool } from '@hookform/devtools'

import s from './EditCardForm.module.scss'
import { EditCardFormValues, useEditCard } from './useEditCard'

import { ImageIcon } from '@/assets'
import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, ControlledInput, ControlledSelect, OptionType, Typography } from '@/components'

export type CardType = {
  question?: string
  answer?: string
  answerImg?: string
  questionImg?: string
  questionVideo?: string
  answerVideo?: string
}

type Props = {
  card: CardType
  placeholder: ReactNode
  options: OptionType[]
  onSubmit: (data: EditCardFormValues) => void
  closeModal: () => void
}

export const EditCardForm = ({
  card,
  placeholder,
  options,
  onSubmit,
  closeModal,
}: Props): JSX.Element => {
  const { control, handleSubmit, watch } = useEditCard()

  const isPictureQuestion = card?.questionImg && watch().questionFormat === 'picture'
  const isPictureAnswer = card?.answerImg && watch().questionFormat === 'picture'

  const onSubmitHandler = (data: EditCardFormValues) => {
    onSubmit(data)
    closeModal()
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <DevTool control={control} />
      <ControlledSelect
        options={options}
        placeholder={placeholder}
        control={control}
        name="questionFormat"
        label="Choose a question format"
        fullWidth
      />
      {!isPictureQuestion && (
        <ControlledInput
          className={s.questionInput}
          name="question"
          placeholder={card?.question}
          control={control}
          label="Question"
        />
      )}
      {isPictureQuestion && (
        <div className={s.imageBlock}>
          <Typography className={s.typographyWrapper} variant={TypographyVariant.Subtitle2}>
            Question:
          </Typography>
          {card?.questionImg && (
            <div className={s.imgWrapper}>
              <img src={card.questionImg} alt="question" />
            </div>
          )}
          <Button variant={ButtonVariant.Secondary}>
            <ImageIcon size={1.6} />
            <Typography variant={TypographyVariant.Subtitle2}>Change Cover</Typography>
          </Button>
        </div>
      )}
      {!isPictureAnswer && (
        <ControlledInput
          placeholder={card?.answer}
          control={control}
          name="answer"
          label="Answer"
        />
      )}
      {isPictureAnswer && (
        <div className={s.imageBlock}>
          <Typography className={s.typographyWrapper} variant={TypographyVariant.Subtitle2}>
            Answer:
          </Typography>
          {card?.answerImg && (
            <div className={s.imgWrapper}>
              <img src={card.answerImg} alt="answer" />
            </div>
          )}
          <Button variant={ButtonVariant.Secondary}>
            <ImageIcon size={1.6} />
            <Typography variant={TypographyVariant.Subtitle2}>Change Cover</Typography>
          </Button>
        </div>
      )}
      <div className={s.actionBlock}>
        <Button variant={ButtonVariant.Secondary} onClick={closeModal} type="reset">
          <Typography variant={TypographyVariant.Subtitle2}>Cancel</Typography>
        </Button>
        <Button type="submit">
          <Typography variant={TypographyVariant.Subtitle2}>Save Changes</Typography>
        </Button>
      </div>
    </form>
  )
}
