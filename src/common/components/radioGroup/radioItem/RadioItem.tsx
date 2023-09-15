import { JSX } from 'react'

import * as Radio from '@radix-ui/react-radio-group'
import cn from 'classnames'

import s from '@common/components/radioGroup/radioItem/RadioItem.module.scss'
export type RadioItem = {
  value: string
  labelTitle: string
  disabled: boolean
}
export const RadioElement = ({ value, labelTitle, disabled }: RadioItem): JSX.Element => {
  return (
    <div className={s.itemContainer}>
      <label className={cn(s.label, disabled && s.disabled)}>
        <Radio.Item className={s.item} value={value} disabled={disabled}>
          <Radio.Indicator className={s.indicator} />
        </Radio.Item>
        <span>{labelTitle}</span>
      </label>
    </div>
  )
}
