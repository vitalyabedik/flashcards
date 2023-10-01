import { ComponentPropsWithoutRef } from 'react'

import cn from 'classnames'

import s from './HeaderProfileInfo.module.scss'

import { TypographyVariant } from '@/common'
import { Avatar, Typography } from '@/components'

type Props = {
  name?: string
  avatar?: string
  email?: string
  className?: string
} & ComponentPropsWithoutRef<'div'>

export const HeaderProfileInfo = ({
  name = 'name',
  avatar = 'avatar',
  email = 'email',
  className,
}: Props): JSX.Element => {
  const classNames = {
    root: cn(s.root, className),
    textWrapper: s.textWrapper,
    text: s.text,
  }

  return (
    <div className={classNames.root}>
      <Avatar image={avatar} userName={name} size="small" />
      <div className={classNames.textWrapper}>
        <Typography variant={TypographyVariant.Subtitle1}>{name}</Typography>
        <Typography className={classNames.text} variant={TypographyVariant.Caption}>
          {email}
        </Typography>
      </div>
    </div>
  )
}
