import { JSX } from 'react'

import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { Input, InputProps } from '@/components'

type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<InputProps, 'value' | 'onChange'>

export const ControlledInput = <T extends FieldValues>({
  name,
  control,
  ...restInputProps
}: ControlledInputProps<T>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  return <Input {...field} {...restInputProps} error={error?.message} />
}
