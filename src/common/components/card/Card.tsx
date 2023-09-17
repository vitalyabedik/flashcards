import { ComponentPropsWithoutRef, forwardRef } from 'react'

import cn from 'classnames'

import s from './Card.module.scss'

export type CardProps = {} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...rest }, ref): JSX.Element => {
    const cardClasses = cn(s.root, className)

    return <div ref={ref} className={cardClasses} {...rest}></div>
  }
)
