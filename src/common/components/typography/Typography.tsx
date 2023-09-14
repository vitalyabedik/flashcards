import { ComponentPropsWithoutRef, ElementType } from 'react'

import cn from 'classnames'

import s from './Typography.module.scss'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
): JSX.Element => {
  const { variant = 'body1', className, as: Component = 'p', ...rest } = props
  const typographyClasses = cn(s[variant], className)

  return <Component className={typographyClasses} {...rest} />
}
