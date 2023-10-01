import { ComponentPropsWithoutRef, ElementRef, forwardRef, JSX, ReactNode } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'
import cn from 'classnames'

import s from './Tabs.module.scss'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

export type TabsProps = { label?: string; children: ReactNode } & ComponentPropsWithoutRef<
  typeof RadixTabs.Root
>

export const Tabs = forwardRef<ElementRef<typeof RadixTabs.Root>, TabsProps>(
  ({ label, children, className, ...restProps }, ref): JSX.Element => {
    const rootClassName = cn(s.root, className)

    return (
      <RadixTabs.Root ref={ref} className={rootClassName} {...restProps}>
        {label && (
          <Typography variant={TypographyVariant.Body2} as="label">
            {label}
          </Typography>
        )}
        <RadixTabs.List className={s.list} loop={true}>
          {children}
        </RadixTabs.List>
      </RadixTabs.Root>
    )
  }
)
