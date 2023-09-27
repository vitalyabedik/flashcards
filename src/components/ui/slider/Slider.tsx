import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'
import cn from 'classnames'

import s from './Slider.module.scss'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

export type SliderProps = {} & ComponentPropsWithoutRef<typeof SliderPrimitive.Root>

export const Slider = forwardRef<ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, ...props }, ref): JSX.Element => {
    const sliderClasses = cn(s.root, className)

    return (
      <div className={s.container}>
        <div className={s.valueWrapper}>
          <Typography variant={TypographyVariant.Body1} as="span">
            {props?.value?.[0]}
          </Typography>
        </div>
        <SliderPrimitive.Root ref={ref} className={sliderClasses} {...props}>
          <SliderPrimitive.Track className={s.track}>
            <SliderPrimitive.Range className={s.range} />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className={s.thumb} aria-label="Volume-min" />
          <SliderPrimitive.Thumb className={s.thumb} aria-label="Volume-max" />
        </SliderPrimitive.Root>
        <div className={s.valueWrapper}>
          <Typography variant={TypographyVariant.Body1} as="span">
            {props?.value?.[1]}
          </Typography>
        </div>
      </div>
    )
  }
)