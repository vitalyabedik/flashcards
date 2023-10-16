import { ReactNode, useState } from 'react'

import { DevTool } from '@hookform/devtools'

import s from './AddCardForm.module.scss'
import { AddCardFormField } from './AddCardFormField/AddCardFormField.tsx'
import { AddCardFormValues, useAddCard } from './useAddCard'

import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, ControlledSelect, OptionType, Typography } from '@/components'

type Props = {
  placeholder: ReactNode
  options: OptionType[]
  onSubmit: (data: FormData) => void
  closeModal: () => void
}

export const AddCardForm = ({ placeholder, options, onSubmit, closeModal }: Props): JSX.Element => {
  const [questionCover, setQuestionCover] = useState<File | null>(null)
  const [questionCoverError, setQuestionCoverError] = useState<null | string>(null)
  const [answerCover, setAnswerCover] = useState<File | null>(null)
  const [answerCoverError, setAnswerCoverError] = useState<null | string>(null)

  // for testing
  console.log(questionCoverError)
  console.log(answerCoverError)

  const { control, handleSubmit, watch } = useAddCard()
  const questionFormat = watch('questionFormat')
  const answerFormat = watch('answerFormat')

  const questionImageUrl = questionCover && URL.createObjectURL(questionCover)
  const answerImageUrl = answerCover && URL.createObjectURL(answerCover)

  const onSubmitHandler = (data: AddCardFormValues) => {
    const formData = new FormData()

    formData.append('question', data.question)
    formData.append('answer', data.answer)
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
        label="Choose a question format"
        fullWidth
      />
      <AddCardFormField
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
        label="Choose an answer format"
        fullWidth
      />
      <AddCardFormField
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
          <Typography variant={TypographyVariant.Subtitle2}>Add New Card</Typography>
        </Button>
      </div>
    </form>
  )
}
