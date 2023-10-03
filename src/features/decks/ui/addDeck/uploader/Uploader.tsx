import { ChangeEvent, ReactNode } from 'react'

import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import s from './Uploader.module.scss'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

type ImageUploaderProps<T extends FieldValues> = { children: ReactNode } & UseControllerProps<T>

export const Uploader = <T extends FieldValues>({
  name,
  control,
  children,
  ...restProps
}: ImageUploaderProps<T>) => {
  const {
    field: { onChange },
  } = useController({
    name,
    control,
  })

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.files?.[0])
  }

  return (
    <Typography className={s.uploader} variant={TypographyVariant.Subtitle2} as="label">
      {children}
      <input
        className={s.fileInput}
        type="file"
        name={name}
        onChange={onChangeHandler}
        {...restProps}
      />
    </Typography>
  )
}
