import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode, useState } from 'react'

import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'

import s from './Dropdown.module.scss'
import { dropdownAnimations } from './dropdownMenuAnimations'

import { MoreIcon } from '@/assets'

export type DropdownProps = {
  children: ReactNode
  trigger?: ReactNode
  align?: 'start' | 'center' | 'end'
  className?: string
} & ComponentPropsWithoutRef<typeof DropdownPrimitive.Content>

export const Dropdown = forwardRef<ElementRef<typeof DropdownPrimitive.Content>, DropdownProps>(
  ({ children, trigger, align = 'end', className }, ref): JSX.Element => {
    const [open, setOpen] = useState(false)

    const classNames = {
      trigger: s.trigger,
      button: s.button,
      content: cn(s.content, className),
      arrow: s.arrow,
    }

    return (
      <DropdownPrimitive.Root open={open} onOpenChange={setOpen}>
        <DropdownPrimitive.Trigger className={classNames.trigger} asChild>
          {trigger ?? (
            <button className={classNames.button}>
              <MoreIcon />
            </button>
          )}
        </DropdownPrimitive.Trigger>
        <AnimatePresence>
          {open && (
            <DropdownPrimitive.Portal forceMount>
              <DropdownPrimitive.Content
                ref={ref}
                className={classNames.content}
                align={align}
                onClick={event => event.stopPropagation()}
                asChild
                forceMount
              >
                <motion.div animate={open ? 'open' : 'closed'} {...dropdownAnimations.menu}>
                  <div>{children}</div>
                  <DropdownPrimitive.Arrow className={classNames.arrow} />
                </motion.div>
              </DropdownPrimitive.Content>
            </DropdownPrimitive.Portal>
          )}
        </AnimatePresence>
      </DropdownPrimitive.Root>
    )
  }
)
