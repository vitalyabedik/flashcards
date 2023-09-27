import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'
import cn from 'classnames'

import s from './Slider.module.scss'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

export const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref): JSX.Element => {
  const sliderClasses = cn(s.root, className)

  return (
    <div className={s.container}>
      <Typography variant={TypographyVariant.Body1} className={s.valueWrapper} as="div">
        {props?.value?.[0]}
      </Typography>
      <SliderPrimitive.Root ref={ref} className={sliderClasses} {...props}>
        <SliderPrimitive.Track className={s.track}>
          <SliderPrimitive.Range className={s.range} />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className={s.thumb} aria-label="Value min" />
        <SliderPrimitive.Thumb className={s.thumb} aria-label="Value max" />
      </SliderPrimitive.Root>
      <Typography variant={TypographyVariant.Body1} className={s.valueWrapper} as="div">
        {props?.value?.[1]}
      </Typography>
    </div>
  )
})
