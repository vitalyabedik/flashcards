import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixSelect from '@radix-ui/react-select'
import cn from 'classnames'

import s from '../Select.module.scss'

import { TypographyVariant } from '@/common'
import { SelectVariant, Typography } from '@/components'

type SelectItemProps = {
  variant?: SelectVariant
  className?: string
} & ComponentPropsWithoutRef<typeof RadixSelect.Item>

export const SelectItem = forwardRef<ElementRef<typeof RadixSelect.Item>, SelectItemProps>(
  ({ variant = 'default', children, className, ...restProps }, ref): JSX.Element => {
    const typographyVariant =
      variant === 'default' ? TypographyVariant.Body1 : TypographyVariant.Body2

    const classNames = {
      selectItem: cn(s[`${variant}Paddings`], s.selectItem, className),
      text: s.text,
    }

    return (
      <RadixSelect.Item ref={ref} className={classNames.selectItem} {...restProps}>
        <RadixSelect.ItemText>
          <Typography className={classNames.text} variant={typographyVariant}>
            {children}
          </Typography>
        </RadixSelect.ItemText>
      </RadixSelect.Item>
    )
  }
)
