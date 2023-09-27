import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixCheckbox from '@radix-ui/react-checkbox'
import cn from 'classnames'

import s from './Checkbox.module.scss'

import { Check } from '@/assets'
import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

type PositionType = 'default' | 'left'

export type CheckboxProps = {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  id?: string
  label?: string
  position?: PositionType
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  (
    { checked, onCheckedChange, disabled, label, id, position = 'default', className, ...rest },
    ref
  ): JSX.Element => {
    const classNames = {
      label: cn(s.label, disabled && s.disabled, className),
      root: cn(s.root),
      checkboxWrapper: cn(s.checkboxWrapper, disabled && s.disabled, s[position]),
      indicator: s.indicator,
    }

    return (
      <Typography className={classNames.label} variant={TypographyVariant.Body2} as="label">
        <div className={classNames.checkboxWrapper}>
          <RadixCheckbox.Root
            ref={ref}
            className={classNames.root}
            id={id}
            checked={checked}
            onCheckedChange={onCheckedChange}
            disabled={disabled}
            required={rest.required}
          >
            {checked && (
              <RadixCheckbox.Indicator className={classNames.indicator} forceMount>
                <Check size={1.8} />
              </RadixCheckbox.Indicator>
            )}
          </RadixCheckbox.Root>
        </div>
        {label}
      </Typography>
    )
  }
)
