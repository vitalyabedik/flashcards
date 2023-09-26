import {
  ChangeEvent,
  KeyboardEvent,
  ComponentPropsWithoutRef,
  forwardRef,
  ReactNode,
  useState,
} from 'react'

import cn from 'classnames'

import s from './Input.module.scss'

import { ClosedEye, OpenEye } from '@/assets'
import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

type InputProps = {
  label?: string
  error?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  onChangeValue?: (value: string) => void
  onLeftIconClickHandler?: () => void
  onRightIconClickHandler?: () => void
  onEnter?: ComponentPropsWithoutRef<'input'>['onKeyDown']
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref): JSX.Element => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false)

  const {
    type,
    label,
    error,
    className,
    leftIcon,
    rightIcon,
    onChange,
    onChangeValue,
    onLeftIconClickHandler,
    onRightIconClickHandler,
    onKeyDown,
    onEnter,
    ...restProps
  } = props

  const setVisiblePasswordHandler = () => {
    setIsVisiblePassword(prevState => !prevState)
  }

  const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onChangeValue?.(e.currentTarget.value)
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      onEnter?.(e)
    }
    onKeyDown?.(e)
  }

  const classNames = {
    root: cn(s.root, className),
    input: cn(s.input, !!leftIcon && s.isLeftIcon, !!rightIcon && s.isRightIcon),
    label: cn(s.label, restProps.disabled && s.disabledText),
    inputWrapper: cn(
      s.inputWrapper,
      !!restProps.value && s.active,
      restProps.disabled && s.disabled,
      !!error && s.error
    ),
    leftIcon: s.leftIcon,
    rightIcon: s.rightIcon,
  }
  const inputType = type === 'password' && isVisiblePassword ? 'text' : type
  const dynamicRightIcon = getRightInputIcon(type || 'text', isVisiblePassword, rightIcon)

  return (
    <div className={classNames.root}>
      {label && (
        <Typography className={classNames.label} as="label" variant={TypographyVariant.Body2}>
          {label}
        </Typography>
      )}
      <div className={classNames.inputWrapper} tabIndex={0}>
        <input
          ref={ref}
          className={classNames.input}
          type={inputType}
          onKeyDown={onKeyPressHandler}
          onChange={onChangeValueHandler}
          {...restProps}
        />
        <InputIcon
          className={classNames.leftIcon}
          icon={leftIcon}
          onClick={onLeftIconClickHandler}
        />
        <InputIcon
          className={classNames.rightIcon}
          icon={dynamicRightIcon}
          onClick={type === 'password' ? setVisiblePasswordHandler : onRightIconClickHandler}
        />
      </div>
      {!!error && (
        <Typography as="span" variant={TypographyVariant.ERROR}>
          {error}
        </Typography>
      )}
    </div>
  )
})

type IconProps = {
  icon?: ReactNode
  className?: string
  onClick?: () => void
}

const InputIcon = ({ icon, className, onClick }: IconProps) => {
  if (!icon) {
    return null
  }

  return (
    <button className={className} onClick={onClick}>
      {icon}
    </button>
  )
}

const getRightInputIcon = (type: string, isVisible: boolean, rightIcon: ReactNode) => {
  if (type === 'password' && isVisible) {
    return <OpenEye />
  } else if (type === 'password' && !isVisible) {
    return <ClosedEye />
  } else {
    return rightIcon
  }
}
