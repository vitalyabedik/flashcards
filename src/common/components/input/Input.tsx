import { ComponentPropsWithoutRef, forwardRef, ReactNode, useState } from 'react'

import cn from 'classnames'

import s from './Input.module.scss'

import { ClosedEye, OpenEye } from '@/assets'
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
  const [isOpen, setIsOpen] = useState(false)

  const { type, value, label, error, placeholder, disabled, className, leftIcon, rightIcon } = props

  const setVisiblePasswordHandler = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  const classNames = {
    input: cn(
      s.input,
      !!value && s.active,
      !!error && s.inputError,
      !!leftIcon && s.isLeftIcon,
      !!rightIcon && s.isRightIcon,
      className
    ),
    label: cn(s.label, disabled && s.disabledText),
    error: s.errorMessage,
    inputWrapper: cn(s.inputWrapper, disabled && s.disabled),
    leftIcon: s.leftIcon,
    rightIcon: s.rightIcon,
  }
  const dynamicInputType = type === 'password' && isOpen ? 'text' : type
  let dynamicRightIcon: ReactNode

  if (type === 'password' && isOpen) {
    dynamicRightIcon = <OpenEye />
  } else if (type === 'password' && !isOpen) {
    dynamicRightIcon = <ClosedEye />
  } else {
    dynamicRightIcon = rightIcon
  }

  return (
    <div className={s.container}>
      {label && (
        <Typography className={classNames.label} as="label" variant={TypographyVariant.Body2}>
          {label}
        </Typography>
      )}
      <div className={classNames.inputWrapper}>
        <input
          ref={ref}
          className={classNames.input}
          type={dynamicInputType}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
        <Icon icon={leftIcon} className={classNames.leftIcon} />
        <Icon
          className={classNames.rightIcon}
          icon={dynamicRightIcon}
          setVisiblePasswordHandler={setVisiblePasswordHandler}
        />
      </div>
      {!!error && (
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
  setVisiblePasswordHandler?: () => void
}

const Icon = ({ icon, className, setVisiblePasswordHandler }: IconProps) => {
  if (!icon) {
    return null
  }

  return (
    <div
      className={className}
      onMouseDown={setVisiblePasswordHandler}
      onMouseUp={setVisiblePasswordHandler}
    >
      {icon}
    </div>
  )
}
