import { ComponentPropsWithoutRef, ElementRef, forwardRef, JSX } from 'react'

import * as Radio from '@radix-ui/react-radio-group'
import cn from 'classnames'

import s from './RadioItem.module.scss'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

export type RadioItemProps = {
  title: string
} & ComponentPropsWithoutRef<typeof Radio.Item>

export const RadioItem = forwardRef<ElementRef<typeof Radio.Item>, RadioItemProps>(
  ({ value, title, disabled }, ref): JSX.Element => {
    const classNames = {
      label: cn(s.label, disabled && s.disabled),
      item: s.item,
      indicator: s.indicator,
      title: cn(s.title, disabled && s.disabledTitle),
    }

    return (
      <Typography className={classNames.label} as={'label'} variant={TypographyVariant.Body2}>
        <Radio.Item ref={ref} className={classNames.item} value={value} disabled={disabled}>
          <Radio.Indicator className={classNames.indicator} />
        </Radio.Item>
        <Typography className={classNames.title} as="span" variant={TypographyVariant.Body2}>
          {title}
        </Typography>
      </Typography>
    )
  }
)
