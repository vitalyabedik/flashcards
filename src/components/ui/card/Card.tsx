import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import cn from 'classnames'

import s from './Card.module.scss'

export const Card = forwardRef<ElementRef<'div'>, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    const cardClasses = cn(s.root, className)

    return <div ref={ref} className={cardClasses} {...restProps}></div>
  }
)

export type CardProps = typeof Card
