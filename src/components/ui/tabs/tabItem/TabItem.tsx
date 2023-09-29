import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'
import cn from 'classnames'

import s from './TabItem.module.scss'

type TabItemProps = ComponentPropsWithoutRef<typeof RadixTabs.Trigger>

export const TabItem = forwardRef<ElementRef<typeof RadixTabs.Trigger>, TabItemProps>(
  ({ value, disabled, className, children }, ref): JSX.Element => {
    const triggerClassname = cn(s.trigger, className)

    return (
      <RadixTabs.Trigger ref={ref} className={triggerClassname} value={value} disabled={disabled}>
        {children}
      </RadixTabs.Trigger>
    )
  }
)
