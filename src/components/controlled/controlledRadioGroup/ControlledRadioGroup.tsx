import { JSX } from 'react'

import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components'

type ControlledRadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioGroupProps, 'value | onValueChange'>

export const ControlledRadioGroup = <T extends FieldValues>({
  name,
  control,
  ...restProps
}: ControlledRadioGroupProps<T>): JSX.Element => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  })

  return <RadioGroup {...restProps} onValueChange={onChange} value={value} name={name} />
}
