import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

import cn from 'classnames'

import s from './Input.module.scss'

import { Typography } from '@common/components'
import { TypographyVariant } from '@common/enums'

type InputOwnProps = {
  label: string
  className: string
  error: string
  leftIcon: ReactNode
  rightIcon: ReactNode
  onChangeValue: (value: string) => void
}

type InputProps = Partial<InputOwnProps> & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref): JSX.Element => {
  const { type, label, error, placeholder, disabled, className, leftIcon } = props
  const classNames = {
    input: cn(s.input, !!error && s.inputError, !!leftIcon && s.isLeftIcon, className),
    label: cn(s.label, disabled && s.disabledText),
    error: s.errorMessage,
    leftIcon: s.leftIcon,
  }

  return (
    <div className={s.container}>
      {label && (
        <Typography className={classNames.label} as="label" variant={TypographyVariant.Body2}>
          {label}
        </Typography>
      )}
      <div className={s.inputWrapper}>
        <input
          ref={ref}
          className={classNames.input}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
        />
        <Icon icon={leftIcon} className={classNames.leftIcon} />
      </div>
      {error && (
        <Typography className={classNames.error} as="span" variant={TypographyVariant.Caption}>
          {error}
        </Typography>
      )}
    </div>
  )
})

type IconProps = {
  icon: ReactNode
  className: string
}

const Icon = ({ icon, className }: IconProps) => {
  if (!icon) {
    return null
  }

  return <div className={className}>{icon}</div>
}
