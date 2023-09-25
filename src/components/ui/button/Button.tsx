import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import cn from 'classnames'

import s from './Button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  className?: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
): JSX.Element => {
  const { variant = 'primary', fullWidth, className, as: Component = 'button', ...rest } = props
  const buttonClasses = cn(s[variant], fullWidth && s.fullWidth, className)

  return <Component className={buttonClasses} {...rest} />
}
