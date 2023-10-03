import { useForm } from 'react-hook-form'

import s from './RateLearnCard.module.scss'
import { rateOptions } from './rateOptions.ts'

import { Button, ControlledRadioGroup } from '@/components'

export type RateLearnCardValues = {
  grade: string
}

type Props = {
  onSubmit: (data: RateLearnCardValues) => void
}

export const RateLearnCard = ({ onSubmit }: Props): JSX.Element => {
  const { control, handleSubmit } = useForm<RateLearnCardValues>({
    defaultValues: { grade: '1' },
  })

  return (
    <form className={s.root} onSubmit={handleSubmit(onSubmit)}>
      <ControlledRadioGroup
        className={s.radioGroup}
        control={control}
        name="grade"
        options={rateOptions}
      />
      <Button type="submit" fullWidth>
        Next Question
      </Button>
    </form>
  )
}
