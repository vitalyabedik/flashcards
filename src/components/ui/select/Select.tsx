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

export type DefaultClassNameType = {
  container?: string
  selectItemPaddings?: string
}

export type SelectProps = {
  options: OptionType[]
  placeholder?: ReactNode
  label?: string
  fullWidth?: boolean
  defaultClassNames?: DefaultClassNameType
  className?: string
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
      disabled,
      defaultClassNames,
      className,
      ...restProps
    },
    ref
  ): JSX.Element => {
    const classNames = {
      label: cn(s.label, disabled && s.labelDisabled),
      trigger: cn(s.trigger, defaultClassNames?.container, fullWidth && s.fullWidth),
      content: cn(s.content, defaultClassNames?.container, className),
      selectItem: cn(s.content, defaultClassNames?.container),
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
          <Typography className={classNames.label} variant={TypographyVariant.Body2} as="label">
            {label}
          </Typography>
        )}
        <RadixSelect.Trigger ref={ref} className={classNames.trigger} aria-label="select">
          <Typography className={s.text} variant={TypographyVariant.Body1}>
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
                <SelectItem
                  key={option.value}
                  value={option.value}
                  defaultClassNames={defaultClassNames}
                >
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
  className?: string
  defaultClassNames?: DefaultClassNameType
} & ComponentPropsWithoutRef<typeof RadixSelect.Item>

const SelectItem = forwardRef<ElementRef<typeof RadixSelect.Item>, SelectItemProps>(
  ({ children, className, defaultClassNames, ...props }, ref): JSX.Element => {
    const selectItemClasses = cn(
      defaultClassNames?.container,
      defaultClassNames?.selectItemPaddings,
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
