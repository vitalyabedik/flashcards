import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixCheckbox from '@radix-ui/react-checkbox'
import * as RadixLabel from '@radix-ui/react-label'
import cn from 'classnames'

import s from './Checkbox.module.scss'

import { Check } from '@/assets/icons'
import { Typography } from '@common/components'
import { TypographyVariant } from '@common/enums'

export type CheckboxProps = Partial<{
  checked: boolean
  onChange: (checked: boolean) => void
  disabled: boolean
  required: boolean
  label: string
  id: string
  position: 'left'
  className: string
}> &
  ComponentPropsWithoutRef<typeof RadixCheckbox.Root>

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  ({ checked, onChange, disabled, required, label, id, position, className }, ref): JSX.Element => {
    const classNames = {
      container: className,
      checkboxWrapper: cn(s.checkboxWrapper, disabled && disabled, position === 'left' && s.left),
      root: s.root,
      indicator: s.indicator,
      label: cn(s.label, disabled && s.disabled),
    }

    return (
      <div className={classNames.container}>
        <RadixLabel.Root asChild>
          <Typography className={classNames.label} variant={TypographyVariant.Body2} as="label">
            <div className={classNames.checkboxWrapper}>
              <RadixCheckbox.Root
                ref={ref}
                className={classNames.root}
                checked={checked}
                onCheckedChange={onChange}
                disabled={disabled}
                required={required}
                id={id}
              >
                {checked && (
                  <RadixCheckbox.Indicator className={classNames.indicator} forceMount>
                    <Check />
                  </RadixCheckbox.Indicator>
                )}
              </RadixCheckbox.Root>
            </div>
            {label}
          </Typography>
        </RadixLabel.Root>
      </div>
    )
  }
)
