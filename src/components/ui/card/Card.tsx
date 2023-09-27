import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import cn from 'classnames'

import s from './Card.module.scss'

export const Card = forwardRef<ElementRef<'div'>, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...rest }, ref): JSX.Element => {
    const cardClasses = cn(s.root, className)

    return <div ref={ref} className={cardClasses} {...rest}></div>
  }
)

export type CardProps = typeof Card
