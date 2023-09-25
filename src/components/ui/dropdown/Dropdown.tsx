import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode, useState } from 'react'

import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'

import s from './Dropdown.module.scss'
import { dropdownAnimations } from './dropdownMenuAnimations'

import { More } from '@/assets'
import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

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
      button: s.button,
      content: cn(s.content, className),
      arrowWrapper: s.arrowWrapper,
      arrow: s.arrow,
    }

    return (
      <DropdownPrimitive.Root open={open} onOpenChange={setOpen}>
        <DropdownPrimitive.Trigger asChild>
          {trigger ?? (
            <button className={classNames.button}>
              <More />
            </button>
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

export type DropdownItemWithIconProps = Omit<DropdownItemProps, 'children'> & {
  icon: ReactNode
  text: string
} & ComponentPropsWithoutRef<'div'>

export const DropdownItemWithIcon = forwardRef<HTMLDivElement, DropdownItemWithIconProps>(
  ({ icon, text, onSelect, className, ...props }, ref): JSX.Element => {
    const classNames = {
      item: cn(s.item, className),
      itemIcon: s.itemIcon,
    }

    return (
      <DropdownPrimitive.Item ref={ref} className={classNames.item} asChild {...props}>
        <motion.div {...dropdownAnimations.item}>
          <div className={classNames.itemIcon}>{icon}</div>
          <Typography variant={TypographyVariant.Caption}>{text}</Typography>
        </motion.div>
      </DropdownPrimitive.Item>
    )
  }
)
