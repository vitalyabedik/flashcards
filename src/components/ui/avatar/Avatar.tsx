import { ComponentPropsWithoutRef, forwardRef } from 'react'

import * as AvatarPrimitive from '@radix-ui/react-avatar'
import cn from 'classnames'

import s from './Avatar.module.scss'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

export type AvatarProps = {
  userName: string
  image?: string
  size?: 'small' | 'large'
  className?: string
} & ComponentPropsWithoutRef<'div'>

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ userName, image, size = 'small', className, ...props }, ref): JSX.Element => {
    const classNames = {
      root: cn(s.root, s[size], className),
      image: s.image,
      fallback: s.fallback,
    }

    const fallbackTitle = (userName.match(/\b\w/g) || []).join('').toUpperCase()

    return (
      <AvatarPrimitive.Root ref={ref} className={classNames.root} {...props}>
        <AvatarPrimitive.Image className={classNames.image} src={image} alt="avatar" />
        <AvatarPrimitive.Fallback className={classNames.fallback}>
          <Typography variant={TypographyVariant.Body1}>{fallbackTitle}</Typography>
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>
    )
  }
)
