import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode, useState } from 'react'

import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'

import s from './Dropdown.module.scss'

import { dropdownAnimations } from '@common/components/dropdown/dropdownMenuAnimations.ts'

export type DropdownProps = {
  children: ReactNode
  trigger?: ReactNode
  align?: 'start' | 'center' | 'end'
  className?: string
} & ComponentPropsWithoutRef<typeof DropdownPrimitive.Root>

export const Dropdown = forwardRef<ElementRef<typeof DropdownPrimitive.Root>, DropdownProps>(
  ({ children, trigger, align = 'end', className }, ref): JSX.Element => {
    const [open, setOpen] = useState(false)

    const classNames = {
      button: s.button,
      content: cn(s.content, className),
    }

    return (
      <DropdownPrimitive.Root open={open} onOpenChange={setOpen}>
        <DropdownPrimitive.Trigger asChild>
          {trigger ?? (
            // TODO: Add icon inside button
            <button className={classNames.button}>more</button>
          )}
        </DropdownPrimitive.Trigger>
        <AnimatePresence>
          {open && (
            <DropdownPrimitive.Portal forceMount>
              <DropdownPrimitive.Content
                asChild
                forceMount
                ref={ref}
                className={classNames.content}
                align={align}
                onClick={event => event.stopPropagation()}
              >
                <motion.div animate={open ? 'open' : 'closed'} {...dropdownAnimations.menu}>
                  {children}
                </motion.div>
              </DropdownPrimitive.Content>
            </DropdownPrimitive.Portal>
          )}
        </AnimatePresence>
      </DropdownPrimitive.Root>
    )
  }
)

export type DropdownItemProps = {
  children: ReactNode
  onSelect?: (event: Event) => void
  className?: string
} & ComponentPropsWithoutRef<typeof DropdownPrimitive.Item>

export const DropdownItem = forwardRef<
  ElementRef<typeof DropdownPrimitive.Item>,
  DropdownItemProps
>(({ children, onSelect, className }, ref): JSX.Element => {
  const DropdownItemClasses = cn(s.item, className)

  return (
    <DropdownPrimitive.Item ref={ref} className={DropdownItemClasses} onSelect={onSelect} asChild>
      <motion.div {...dropdownAnimations.item}>{children}</motion.div>
    </DropdownPrimitive.Item>
  )
})
