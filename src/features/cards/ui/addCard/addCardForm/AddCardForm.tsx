import { ReactNode } from 'react'

import { DevTool } from '@hookform/devtools'

import s from './AddCardForm.module.scss'
import { AddCardFormValues, useAddCard } from './useAddCard'

import { ImageIcon, Mask } from '@/assets'
import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, ControlledInput, ControlledSelect, OptionType, Typography } from '@/components'

export type CardType = {
  question: string
  answer: string
  answerImg?: string
  questionImg?: string
  questionVideo?: string
  answerVideo?: string
}

type Props = {
  card: CardType
  placeholder: ReactNode
  options: OptionType[]
  onSubmit: (data: AddCardFormValues) => void
  closeModal: () => void
}

export const AddCardForm = ({
  card,
  placeholder,
  options,
  onSubmit,
  closeModal,
}: Props): JSX.Element => {
  const { control, handleSubmit, watch } = useAddCard()

  const isPicture = watch().questionFormat === 'picture'

  const onSubmitHandler = (data: AddCardFormValues) => {
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
      {!isPicture && (
        <ControlledInput
          className={s.questionInput}
          name="question"
          placeholder={card?.question}
          control={control}
          label="Question"
        />
      )}
      {isPicture && (
        <div className={s.imageBlock}>
          <Typography className={s.typographyWrapper} variant={TypographyVariant.Subtitle2}>
            Question:
          </Typography>
          <Mask />
          <Button variant={ButtonVariant.Secondary}>
            <ImageIcon size={1.6} />
            <Typography variant={TypographyVariant.Subtitle2}>Change Cover</Typography>
          </Button>
        </div>
      )}
      {!isPicture && (
        <ControlledInput
          placeholder={card?.answer}
          control={control}
          name="answer"
          label="Answer"
        />
      )}
      {isPicture && (
        <div className={s.imageBlock}>
          <Typography className={s.typographyWrapper} variant={TypographyVariant.Subtitle2}>
            Answer:
          </Typography>
          <Mask />
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
          <Typography variant={TypographyVariant.Subtitle2}>Add New Card</Typography>
        </Button>
      </div>
    </form>
  )
}
