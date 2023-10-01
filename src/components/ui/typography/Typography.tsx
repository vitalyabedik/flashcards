import { ComponentPropsWithoutRef, ElementType } from 'react'

import cn from 'classnames'

import s from './Typography.module.scss'

import { TypographyVariant } from '@/common'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  variant?: TypographyVariant
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>({
  variant = TypographyVariant.Body1,
  className,
  as,
  ...restProps
}: TypographyProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>): JSX.Element => {
  const Component = as || 'p'

  const typographyClasses = cn(s[variant], className)

  return <Component className={typographyClasses} {...restProps} />
}
