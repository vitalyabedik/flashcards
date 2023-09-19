import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, ReactNode, useState } from 'react'

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
  onChangeValue?: (value: string) => void
}

type InputProps = Partial<InputOwnProps> & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true)

  const {
    type,
    value,
    label,
    error,
    placeholder,
    disabled,
    className,
    leftIcon,
    rightIcon,
    onChange,
    onChangeValue,
    ...restProps
  } = props

  const setVisiblePasswordHandler = () => {
    setIsOpen(!isOpen)
  }

  const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onChangeValue?.(e.currentTarget.value)
  }

  const classNames = {
    input: cn(s.input, !!leftIcon && s.isLeftIcon, !!rightIcon && s.isRightIcon, className),
    label: cn(s.label, disabled && s.disabledText),
    error: s.errorMessage,
    inputWrapper: cn(
      s.inputWrapper,
      !!value && s.active,
      disabled && s.disabled,
      !!error && s.error
    ),
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
      <div className={classNames.inputWrapper} tabIndex={0}>
        <input
          ref={ref}
          className={classNames.input}
          type={dynamicInputType}
          value={value}
          placeholder={placeholder}
          onChange={onChangeValueHandler}
          disabled={disabled}
          {...restProps}
        />
        <Icon icon={leftIcon} className={classNames.leftIcon} />
        <Icon
          className={classNames.rightIcon}
          icon={dynamicRightIcon}
          onClick={setVisiblePasswordHandler}
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
  onClick?: () => void
}

const Icon = ({ icon, className, onClick }: IconProps) => {
  if (!icon) {
    return null
  }

  return (
    <div className={className} onClick={onClick}>
      {icon}
    </div>
  )
}
