import { ComponentPropsWithoutRef, ElementRef, forwardRef, JSX } from 'react'

import * as RaddixTabs from '@radix-ui/react-tabs'
import cn from 'classnames'

import s from './Tabs.module.scss'

type TabType = {
  value: string
  title: string
  disabled: boolean
}

type TabsOwnProps = {
  tabs: TabType[]
  classNames?: Record<'root' | 'list' | 'trigger', string>
}

type TabsProps = TabsOwnProps & ComponentPropsWithoutRef<typeof RaddixTabs.Root>

export const Tabs = forwardRef<ElementRef<typeof RaddixTabs.Root>, TabsProps>(
  ({ value, onValueChange, tabs, classNames, ...props }, ref): JSX.Element => {
    const onClickHandler = (value: string) => {
      onValueChange?.(value)
    }

    const tabClassnames = {
      root: cn(s.root, classNames?.root),
      list: cn(s.list, classNames?.list),
      trigger(triggerValue: string) {
        return cn(s.trigger, classNames?.trigger, triggerValue === value && s.active)
      },
    }

    return (
      <RaddixTabs.Root
        ref={ref}
        className={tabClassnames.root}
        value={value}
        onValueChange={onClickHandler}
        {...props}
      >
        <RaddixTabs.List className={tabClassnames.list} loop={true}>
          {tabs.map(tab => (
            <RaddixTabs.Trigger
              className={tabClassnames.trigger(tab.value)}
              key={tab.value}
              value={tab.value}
              disabled={tab.disabled}
            >
              {tab.title}
            </RaddixTabs.Trigger>
          ))}
        </RaddixTabs.List>
      </RaddixTabs.Root>
    )
  }
)
