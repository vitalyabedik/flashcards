import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

import cn from 'classnames'

import s from './Input.module.scss'

import { Typography } from '@common/components'
import { TypographyVariant } from '@common/enums'

type InputOwnProps = {
  label: string
  className: string
  leftIcon: ReactNode
  rightIcon: ReactNode
  onChangeValue: (value: string) => void
}

type InputProps = Partial<InputOwnProps> & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref): JSX.Element => {
  const { type, label, placeholder, className } = props
  const classNames = {
    input: cn(s.input, className),
    label: s.label,
  }

  return (
    <div className={s.container}>
      {label && (
        <Typography className={classNames.label} as="label" variant={TypographyVariant.Body2}>
          {label}
        </Typography>
      )}
      <input ref={ref} className={classNames.input} type={type} placeholder={placeholder} />
    </div>
  )
})
