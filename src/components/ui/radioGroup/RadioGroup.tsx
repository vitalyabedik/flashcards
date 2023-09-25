import { ComponentPropsWithoutRef, ElementRef, forwardRef, JSX } from 'react'

import * as Radio from '@radix-ui/react-radio-group'
import cn from 'classnames'

import s from './RadioGroup.module.scss'
import { RadioItem, RadioItemProps } from './radioItem'

type RadioGroupProps = { options: RadioItemProps[] } & ComponentPropsWithoutRef<typeof Radio.Root>

export const RadioGroup = forwardRef<ElementRef<typeof Radio.Root>, RadioGroupProps>(
  ({ options, className, ...props }, ref): JSX.Element => {
    const rootClassName = cn(s.root, className)

    return (
      <Radio.Root ref={ref} className={rootClassName} {...props}>
        {options.map(item => (
          <RadioItem key={item.value} {...item} />
        ))}
      </Radio.Root>
    )
  }
)
