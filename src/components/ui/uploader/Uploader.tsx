import { ChangeEvent, ComponentPropsWithoutRef, ReactNode, useRef } from 'react'

import cn from 'classnames'
import { ZodError } from 'zod'

import s from './Uploader.module.scss'
import { UploaderPayload, uploaderSchema } from './uploaderSchema'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

type Props = {
  children: ReactNode
  onLoadCover: (file: UploaderPayload) => void
  onLoadError: (error: string) => void
} & ComponentPropsWithoutRef<'input'>

export const Uploader = ({
  children,
  className,
  onLoadCover,
  onLoadError,
  ...restProps
}: Props): JSX.Element => {
  const ref = useRef<HTMLInputElement>(null)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    try {
      uploaderSchema.parse(file)
      if (file) {
        onLoadCover(file)
      }
    } catch (e) {
      const err = e as Error | ZodError

      if (err instanceof ZodError) {
        onLoadError('Zod error: ' + err.errors[0].message)
      } else {
        onLoadError('Native error: ' + err.message)
      }
    }
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
        onChange={onChangeHandler}
        {...restProps}
      />
    </Typography>
  )
}
