import { ComponentPropsWithoutRef, ElementRef, forwardRef, JSX, ReactNode } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'
import cn from 'classnames'

import s from './Tabs.module.scss'

export type TabsProps = { children: ReactNode } & ComponentPropsWithoutRef<typeof RadixTabs.Root>

export const Tabs = forwardRef<ElementRef<typeof RadixTabs.Root>, TabsProps>(
  ({ children, className, ...restProps }, ref): JSX.Element => {
    const rootClassName = cn(s.root, className)

    return (
      <RadixTabs.Root ref={ref} className={rootClassName} {...restProps}>
        <RadixTabs.List className={s.list} loop={true}>
          {children}
        </RadixTabs.List>
      </RadixTabs.Root>
    )
  }
)
