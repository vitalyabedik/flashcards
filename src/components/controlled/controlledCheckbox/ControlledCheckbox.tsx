import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components'

type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'onCheckedChange' | 'checked' | 'id'>

export const ControlledCheckbox = <T extends FieldValues>({
  name,
  control,
  ...restCheckboxProps
}: ControlledInputProps<T>): JSX.Element => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  })

  return <Checkbox {...restCheckboxProps} checked={value} onCheckedChange={onChange} />
}
