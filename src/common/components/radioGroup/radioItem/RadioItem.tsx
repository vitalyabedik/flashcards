import { JSX } from 'react'

import * as Radio from '@radix-ui/react-radio-group'
import cn from 'classnames'

import { Typography } from '@common/components'
import s from '@common/components/radioGroup/radioItem/RadioItem.module.scss'
import { TypographyVariant } from '@common/enums'

export type RadioItem = {
  value: string
  labelTitle: string
  disabled: boolean
}
export const RadioElement = ({ value, labelTitle, disabled }: RadioItem): JSX.Element => {
  return (
    <div className={s.itemContainer}>
      <Typography
        className={cn(s.label, disabled && s.disabled)}
        as="label"
        variant={TypographyVariant.Body2}
      >
        <Radio.Item className={s.item} value={value} disabled={disabled}>
          <Radio.Indicator className={s.indicator} />
        </Radio.Item>
        <span>{labelTitle}</span>
      </Typography>
    </div>
  )
}
