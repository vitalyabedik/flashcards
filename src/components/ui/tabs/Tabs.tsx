import { ComponentPropsWithoutRef, ElementRef, forwardRef, JSX } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'
import cn from 'classnames'

import s from './Tabs.module.scss'

type TabType = { title: string } & ComponentPropsWithoutRef<typeof RadixTabs.Trigger>

export type TabsProps = {
  tabs: TabType[]
  classNames?: { root?: string; list?: string; trigger?: string }
} & ComponentPropsWithoutRef<typeof RadixTabs.Root>

export const Tabs = forwardRef<ElementRef<typeof RadixTabs.Root>, TabsProps>(
  ({ tabs, classNames, ...restProps }, ref): JSX.Element => {
    const tabClassnames = {
      root: cn(s.root, classNames?.root),
      list: cn(s.list, classNames?.list),
      trigger(triggerValue: string) {
        return cn(s.trigger, classNames?.trigger, triggerValue === restProps.value && s.active)
      },
    }

    return (
      <RadixTabs.Root ref={ref} className={tabClassnames.root} {...restProps}>
        <RadixTabs.List className={tabClassnames.list} loop={true}>
          {tabs.map(tab => (
            <RadixTabs.Trigger
              key={tab.value}
              className={tabClassnames.trigger(tab.value)}
              value={tab.value}
              disabled={tab.disabled}
            >
              {tab.title}
            </RadixTabs.Trigger>
          ))}
        </RadixTabs.List>
      </RadixTabs.Root>
    )
  }
)
