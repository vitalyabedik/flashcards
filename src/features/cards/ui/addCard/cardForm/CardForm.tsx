import { ReactNode, useState } from 'react'

import { DevTool } from '@hookform/devtools'

import s from './CardForm.module.scss'
import { CardFormField } from './CardFormField'
import { CardFormValues, useCardForm } from './useAddForm'

import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, ControlledSelect, OptionType, Typography } from '@/components'
import { CardValues } from '@/features'

type Props = {
  buttonTitle: string
  placeholder: ReactNode
  options: OptionType[]
  cardValues?: CardValues
  onSubmit: (data: FormData) => void
  closeModal: () => void
}

export const CardForm = ({
  buttonTitle,
  placeholder,
  options,
  cardValues,
  onSubmit,
  closeModal,
}: Props): JSX.Element => {
  const [questionCover, setQuestionCover] = useState<File | null>(null)
  const [answerCover, setAnswerCover] = useState<File | null>(null)
  // use toast component for error
  const [questionCoverError, setQuestionCoverError] = useState<null | string>(null)
  const [answerCoverError, setAnswerCoverError] = useState<null | string>(null)

  console.log(questionCoverError, answerCoverError)
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useCardForm({ answer: cardValues?.answer || '', question: cardValues?.question || '' })
  const questionFormat = watch('questionFormat')
  const questionError = errors.question?.message
  const answerFormat = watch('answerFormat')
  const answerError = errors.answer?.message

  if (questionError && questionFormat === 'picture') {
    setValue('questionFormat', 'text')
  }
  if (answerError && answerFormat === 'picture') {
    setValue('answerFormat', 'text')
  }
  const questionImageUrl = questionCover
    ? URL.createObjectURL(questionCover)
    : cardValues?.questionImg
  const answerImageUrl = answerCover ? URL.createObjectURL(answerCover) : cardValues?.questionImg

  const onSubmitHandler = (data: CardFormValues) => {
    const formData = new FormData()

    formData.append('question', data.question)
    formData.append('answer', data.answer)
    questionCover && formData.append('questionImg', questionCover)
    answerCover && formData.append('answerImg', answerCover)

    onSubmit(formData)
    closeModal()
  }
  const onLoadQuestionCover = (data: File) => {
    setQuestionCover(data)
    setQuestionCoverError(null)
  }
  const onLoadQuestionCoverError = (error: string) => {
    setQuestionCoverError(error)
  }

  const onLoadAnswerCover = (data: File) => {
    setAnswerCover(data)
    setAnswerCoverError(null)
  }
  const onLoadAnswerCoverError = (error: string) => {
    setAnswerCoverError(error)
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <DevTool control={control} />
      <ControlledSelect
        className={s.selectItem}
        options={options}
        placeholder={placeholder}
        control={control}
        name="questionFormat"
        label="Choose a question format (text format is required!)"
        fullWidth
      />
      <CardFormField
        dataFieldFormat={questionFormat}
        imageUrl={questionImageUrl}
        name="question"
        label="Question"
        control={control}
        onLoadCover={onLoadQuestionCover}
        onLoadError={onLoadQuestionCoverError}
      />
      <ControlledSelect
        className={s.selectItem}
        options={options}
        placeholder={placeholder}
        control={control}
        name="answerFormat"
        label="Choose an answer format (text format is required!)"
        fullWidth
      />
      <CardFormField
        dataFieldFormat={answerFormat}
        imageUrl={answerImageUrl}
        name="answer"
        label="Answer"
        control={control}
        onLoadCover={onLoadAnswerCover}
        onLoadError={onLoadAnswerCoverError}
      />
      <div className={s.actionBlock}>
        <Button variant={ButtonVariant.Secondary} onClick={closeModal} type="reset">
          <Typography variant={TypographyVariant.Subtitle2}>Cancel</Typography>
        </Button>
        <Button type="submit">
          <Typography variant={TypographyVariant.Subtitle2}>{buttonTitle}</Typography>
        </Button>
      </div>
    </form>
  )
}
