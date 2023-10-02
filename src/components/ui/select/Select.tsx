import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'

import * as RadixSelect from '@radix-ui/react-select'
import cn from 'classnames'

import s from './Select.module.scss'

import { ArrowDownIcon } from '@/assets'
import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

export type OptionType = {
  value: string
  title: string
}

type SelectVariant = 'default' | 'pagination'

export type SelectProps = {
  options: OptionType[]
  variant?: SelectVariant
  placeholder?: ReactNode
  label?: string
  fullWidth?: boolean
  className?: string
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>

export const Select = forwardRef<ElementRef<typeof RadixSelect.Root>, SelectProps>(
  (
    {
      options,
      placeholder = 'Select value...',
      variant = 'default',
      label,
      value,
      onValueChange,
      fullWidth,
      disabled,
      className,
      ...restProps
    },
    ref
  ): JSX.Element => {
    const typographyVariant =
      variant === 'default' ? TypographyVariant.Body1 : TypographyVariant.Body2

    const classNames = {
      label: cn(s.text, disabled && s.disabled),
      trigger: cn(
        s.trigger,
        s[variant],
        s[`${variant}Paddings`],
        fullWidth && s.fullWidth,
        className
      ),
      content: cn(s.content),
      icon: s.icon,
    }

    return (
      <RadixSelect.Root
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        required={restProps.required}
      >
        {label && (
          <Typography className={classNames.label} variant={typographyVariant} as="label">
            {label}
          </Typography>
        )}
        <RadixSelect.Trigger ref={ref} className={classNames.trigger} aria-label="select">
          <Typography className={s.text} variant={typographyVariant}>
            <RadixSelect.Value className={s.value} placeholder={placeholder} />
          </Typography>
          <RadixSelect.Icon className={s.icon}>
            <ArrowDownIcon size={1.6} />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content ref={ref} className={classNames.content} position="popper">
            <RadixSelect.Viewport>
              {options.map(option => (
                <SelectItem key={option.value} value={option.value} variant={variant}>
                  {option.title}
                </SelectItem>
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    )
  }
)

type SelectItemProps = {
  variant?: SelectVariant
  className?: string
} & ComponentPropsWithoutRef<typeof RadixSelect.Item>

const SelectItem = forwardRef<ElementRef<typeof RadixSelect.Item>, SelectItemProps>(
  ({ variant = 'default', children, className, ...props }, ref): JSX.Element => {
    const typographyVariant =
      variant === 'default' ? TypographyVariant.Body1 : TypographyVariant.Body2

    const classNames = {
      selectItem: cn(s[`${variant}Paddings`], s.selectItem, className),
      text: s.text,
    }

    return (
      <RadixSelect.Item ref={ref} className={classNames.selectItem} {...props}>
        <RadixSelect.ItemText>
          <Typography className={classNames.text} variant={typographyVariant}>
            {children}
          </Typography>
        </RadixSelect.ItemText>
      </RadixSelect.Item>
    )
  }
)
