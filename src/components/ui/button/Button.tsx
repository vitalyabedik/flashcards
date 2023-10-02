import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from 'react'

import cn from 'classnames'

import s from './Button.module.scss'

import { ButtonVariant } from '@/common'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  variant?: ButtonVariant
  fullWidth?: boolean
  className?: string
} & ComponentPropsWithoutRef<T>

export const ButtonPolymorph = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
  ref: ElementRef<T>
): JSX.Element => {
  const {
    variant = ButtonVariant.Primary,
    fullWidth,
    className,
    as: Component = 'button',
    ...restProps
  } = props
  const buttonClasses = cn(s[variant], fullWidth && s.fullWidth, className)

  return (
    // @ts-expect-error TS2322
    <Component ref={ref} className={buttonClasses} {...restProps} />
  )
}

export const Button = forwardRef(ButtonPolymorph) as <T extends ElementType = 'button'>(
  props: ButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>> & {
      ref?: ForwardedRef<ElementRef<T>>
    }
) => ReturnType<typeof ButtonPolymorph>
