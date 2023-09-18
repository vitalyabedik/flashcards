import { ComponentPropsWithoutRef, ElementRef, forwardRef, JSX } from 'react'

import * as Radio from '@radix-ui/react-radio-group'
import cn from 'classnames'

import s from './RadioGroup.module.scss'

import { RadioElement, RadioItem } from '@common/components/radioGroup/radioItem/RadioItem.tsx'

type RadioGroupProps = { radioGroupItems: RadioItem[] } & ComponentPropsWithoutRef<
  typeof Radio.Root
>

export const RadioGroup = forwardRef<ElementRef<typeof Radio.Root>, RadioGroupProps>(
  ({ radioGroupItems, className, ...props }, ref): JSX.Element => {
    const rootClassname = cn(s.root, className)

    return (
      <Radio.Root
        ref={ref}
        className={rootClassname}
        defaultValue={radioGroupItems[0].value}
        {...props}
      >
        {radioGroupItems.map(item => (
          <RadioElement key={item.labelTitle} {...item} />
        ))}
      </Radio.Root>
    )
  }
)
