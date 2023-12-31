import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'
import cn from 'classnames'

import s from './Slider.module.scss'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

export type SliderProps = { label: string } & ComponentPropsWithoutRef<typeof SliderPrimitive.Root>

export const Slider = forwardRef<ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ label, className, ...restProps }, ref): JSX.Element => {
    const sliderClasses = cn(s.root, className)

    return (
      <div>
        {label && (
          <Typography variant={TypographyVariant.Body2} as="label">
            {label}
          </Typography>
        )}
        <div className={s.container}>
          <Typography variant={TypographyVariant.Body1} className={s.valueWrapper} as="div">
            {restProps?.value?.[0]}
          </Typography>
          <SliderPrimitive.Root ref={ref} className={sliderClasses} {...restProps}>
            <SliderPrimitive.Track className={s.track}>
              <SliderPrimitive.Range className={s.range} />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb className={s.thumb} aria-label="Value min" />
            <SliderPrimitive.Thumb className={s.thumb} aria-label="Value max" />
          </SliderPrimitive.Root>
          <Typography variant={TypographyVariant.Body1} className={s.valueWrapper} as="div">
            {restProps?.value?.[1]}
          </Typography>
        </div>
      </div>
    )
  }
)
