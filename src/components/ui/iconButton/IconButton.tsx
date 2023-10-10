import {
  cloneElement,
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementRef,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react'

import cn from 'classnames'

import s from './IconButton.module.scss'

type Props = {
  icon: ReactNode
  size?: number
  bgColor?: string
} & ComponentPropsWithoutRef<'button'>

export const IconButton = forwardRef<ElementRef<'button'>, Props>(
  (
    { icon, size: sizeProp, bgColor = 'transparent', className, ...restProps },
    ref
  ): JSX.Element => {
    const size = sizeProp ? `${sizeProp}rem` : '2.4rem'

    const IconButtonStyle: CSSProperties = {
      width: size,
      height: size,
      backgroundColor: bgColor,
    }

    const IconButtonClasses = cn(s.root, className)

    return (
      <button ref={ref} className={IconButtonClasses} style={IconButtonStyle} {...restProps}>
        {isValidElement(icon) ? cloneElement(icon as ReactElement<any>, { size: size }) : null}
      </button>
    )
  }
)
