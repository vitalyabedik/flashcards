import { HTMLProps, ReactNode, SVGProps } from 'react'

export type IconProps = {
  color?: string
  size?: number
  svgProps?: SVGProps<SVGSVGElement>
} & Omit<HTMLProps<HTMLSpanElement>, 'color' | 'size'>

type IconWrapperProps = { icon: ReactNode } & IconProps

export const IconWrapper = ({
  icon,
  color: colorProp,
  size: sizeProp,
  ...restProps
}: IconWrapperProps) => {
  const color = colorProp ? colorProp : 'currentColor'
  const size = sizeProp ? `${sizeProp}rem` : '2.4rem'

  return (
    <span
      role="img"
      aria-hidden="true"
      style={{
        color: color,
        width: size,
        height: size,
        display: 'inline-flex',
        fontSize: 'inherit',
      }}
      {...restProps}
    >
      {icon}
    </span>
  )
}
