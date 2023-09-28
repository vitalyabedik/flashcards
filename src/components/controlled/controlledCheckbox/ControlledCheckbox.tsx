import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components'

type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'onCheckedChange' | 'checked' | 'id'>

export const ControlledCheckbox = <T extends FieldValues>(props: ControlledInputProps<T>) => {
  const { name, control, ...restCheckboxProps } = props

  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  })

  return <Checkbox checked={value} onCheckedChange={onChange} {...restCheckboxProps} />
}
