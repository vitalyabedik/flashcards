import { ChangeEvent, ReactNode, useRef } from 'react'

import cn from 'classnames'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import s from './Uploader.module.scss'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

type ImageUploaderProps<T extends FieldValues> = {
  children: ReactNode
  className?: string
} & UseControllerProps<T>

export const Uploader = <T extends FieldValues>({
  name,
  control,
  children,
  className,
  ...restProps
}: ImageUploaderProps<T>) => {
  const {
    field: { onChange },
  } = useController({
    name,
    control,
  })
  const ref = useRef<HTMLInputElement>(null)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.files?.[0])
  }
  const uploaderClassName = cn(s.uploader, className)

  return (
    <Typography
      className={uploaderClassName}
      variant={TypographyVariant.Subtitle2}
      as="label"
      onClick={() => ref.current?.click()}
    >
      {children}
      <input
        ref={ref}
        className={s.fileInput}
        type="file"
        name={name}
        onChange={onChangeHandler}
        {...restProps}
      />
    </Typography>
  )
}
