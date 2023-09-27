import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components'

type ControlledRadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioGroupProps, 'value | onValueChange'>

export const ControlledRadioGroup = <T extends FieldValues>(
  props: ControlledRadioGroupProps<T>
) => {
  const { name, control, ...restProps } = props
  const { field } = useController({ name, control })

  return <RadioGroup {...field} {...restProps} />
}
