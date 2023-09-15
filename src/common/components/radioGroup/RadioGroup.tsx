import { JSX } from 'react'

import * as Radio from '@radix-ui/react-radio-group'

import s from './RadioGroup.module.scss'

import { RadioElement, RadioItem } from '@common/components/radioGroup/radioItem/RadioItem.tsx'

type RadioGroupProps = {
  value: string
  radioGroupItems: RadioItem[]
  onValueChange: (value: string) => void
}

export const RadioGroup = ({
  value,
  radioGroupItems,
  onValueChange,
}: RadioGroupProps): JSX.Element => {
  return (
    <Radio.Root
      className={s.root}
      onValueChange={onValueChange}
      value={value}
      defaultValue={radioGroupItems[0].value}
    >
      {radioGroupItems.map(item => (
        <RadioElement key={item.labelTitle} {...item} />
      ))}
    </Radio.Root>
  )
}
