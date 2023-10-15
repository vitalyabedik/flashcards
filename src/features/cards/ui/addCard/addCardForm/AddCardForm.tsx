import { ReactNode } from 'react'

import { DevTool } from '@hookform/devtools'

import s from './AddCardForm.module.scss'
import { AddCardFormValues, useAddCard } from './useAddCard'

import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, ControlledInput, ControlledSelect, OptionType, Typography } from '@/components'

type Props = {
  placeholder: ReactNode
  options: OptionType[]
  onSubmit: (data: AddCardFormValues) => void
  closeModal: () => void
}

export const AddCardForm = ({ placeholder, options, onSubmit, closeModal }: Props): JSX.Element => {
  const { control, handleSubmit, watch } = useAddCard()
  const questionFormat = watch('questionFormat')
  const answerFormat = watch('answerFormat')

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
      {questionFormat === 'text' && (
        <ControlledInput name="question" control={control} label="Question" />
      )}

      <ControlledSelect
        options={options}
        placeholder={placeholder}
        control={control}
        name="answerFormat"
        label="Choose an answer format"
        fullWidth
      />
      {answerFormat === 'text' && (
        <ControlledInput name="answer" control={control} label="Answer" />
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
