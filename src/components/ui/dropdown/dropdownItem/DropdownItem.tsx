import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'

import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import cn from 'classnames'
import { motion } from 'framer-motion'

import s from './DropdownItem.module.scss'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'
import { dropdownAnimations } from '@components/ui/dropdown/dropdownMenuAnimations.ts'

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
} & ComponentPropsWithoutRef<typeof DropdownPrimitive.Item>

export const DropdownItemWithIcon = forwardRef<
  ElementRef<typeof DropdownPrimitive.Item>,
  DropdownItemWithIconProps
>(({ icon, text, onSelect, className, ...props }, ref): JSX.Element => {
  const classNames = {
    item: cn(s.item, className),
    itemIcon: s.itemIcon,
  }

  return (
    <DropdownPrimitive.Item
      ref={ref}
      className={classNames.item}
      asChild
      {...props}
      onSelect={onSelect}
    >
      <motion.div {...dropdownAnimations.item}>
        <div className={classNames.itemIcon}>{icon}</div>
        <Typography variant={TypographyVariant.Caption}>{text}</Typography>
      </motion.div>
    </DropdownPrimitive.Item>
  )
})
