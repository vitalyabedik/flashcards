import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import cn from 'classnames'

import s from './Preloader.module.scss'

import { Loading } from '@/assets'

export const Preloader = forwardRef<ElementRef<'div'>, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    const preloaderClasses = cn(s.root, className)

    return (
      <div ref={ref} className={preloaderClasses} {...restProps}>
        <Loading />
      </div>
    )
  }
)
