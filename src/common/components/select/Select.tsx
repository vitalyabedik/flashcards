import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'

import * as RadixLabel from '@radix-ui/react-label'
import * as RadixSelect from '@radix-ui/react-select'
import cn from 'classnames'

import s from './Select.module.scss'

import { ArrowUp } from '@/assets'
import { Typography } from '@common/components'
import { TypographyVariant } from '@common/enums'

export type SelectItemOwnProps = {
  value: string
  title: string
}

export type SelectProps = {
  options: SelectItemOwnProps[]
  placeholder?: ReactNode
  label?: string
  value?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  required?: boolean
  fullWidth?: boolean
  className?: string
  defaultClasses?: Partial<Record<'container' | 'selectItemPaddings', string>>
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>

export const Select = forwardRef<ElementRef<typeof RadixSelect.Root>, SelectProps>(
  (
    {
      options,
      placeholder = 'Select value...',
      label,
      value,
      onValueChange,
      fullWidth,
      className,
      disabled,
      required,
      defaultClasses,
    },
    ref
  ): JSX.Element => {
    const classNames = {
      label: cn(s.label, disabled && s.labelDisabled),
      trigger: cn(s.trigger, defaultClasses?.container, fullWidth && s.fullWidth),
      content: cn(s.content, defaultClasses?.container, className),
      selectItem: cn(s.content, defaultClasses?.container),
      icon: s.icon,
    }

    return (
      <RadixLabel.Root>
        {label && (
          <Typography variant={TypographyVariant.Body2} as="label" className={classNames.label}>
            {label}
          </Typography>
        )}
        <RadixSelect.Root
          value={value}
          onValueChange={onValueChange}
          disabled={disabled}
          required={required}
        >
          <RadixSelect.Trigger ref={ref} className={classNames.trigger} aria-label="select">
            <Typography className={s.text} variant={TypographyVariant.Body1}>
              <RadixSelect.Value className={s.value} placeholder={placeholder} />
            </Typography>
            <RadixSelect.Icon className={s.icon}>
              <ArrowUp size={1.6} />
            </RadixSelect.Icon>
          </RadixSelect.Trigger>
          <RadixSelect.Portal>
            <RadixSelect.Content className={classNames.content} ref={ref} position="popper">
              <RadixSelect.Viewport>
                {options.map(option => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    defaultClasses={defaultClasses}
                  >
                    {option.title}
                  </SelectItem>
                ))}
              </RadixSelect.Viewport>
            </RadixSelect.Content>
          </RadixSelect.Portal>
        </RadixSelect.Root>
      </RadixLabel.Root>
    )
  }
)

export type SelectItemProps = {
  children: ReactNode
  className?: string
  defaultClasses?: Partial<Record<'container' | 'selectItemPaddings', string>>
} & ComponentPropsWithoutRef<typeof RadixSelect.Item>

const SelectItem = forwardRef<ElementRef<typeof RadixSelect.Item>, SelectItemProps>(
  ({ children, className, defaultClasses, ...props }, ref): JSX.Element => {
    const selectItemClasses = cn(
      defaultClasses?.container,
      defaultClasses?.selectItemPaddings,
      s.selectItem,
      className
    )

    return (
      <RadixSelect.Item ref={ref} className={selectItemClasses} {...props}>
        <RadixSelect.ItemText>
          <Typography className={s.text} variant={TypographyVariant.Body1}>
            {children}
          </Typography>
        </RadixSelect.ItemText>
      </RadixSelect.Item>
    )
  }
)
