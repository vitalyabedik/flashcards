import { ComponentPropsWithoutRef, ElementType } from 'react'

import cn from 'classnames'

import s from './Typography.module.scss'

import { TypographyVariant } from '@/common'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  variant?: TypographyVariant
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
): JSX.Element => {
  const { variant = TypographyVariant.Body1, className, as: Component = 'p', ...restProps } = props
  const typographyClasses = cn(s[variant], className)

  return <Component className={typographyClasses} {...restProps} />
}
