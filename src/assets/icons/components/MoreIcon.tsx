import { IconProps, IconWrapper } from '../IconWrapper'

export const MoreIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <circle cx={12} cy={12} r={8.5} stroke="currentColor" />
          <g clipPath="url(#clip0_5928_12620)">
            <path
              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
              fill="currentColor"
            />
            <path
              d="M12 9.5C12.5523 9.5 13 9.05228 13 8.5C13 7.94772 12.5523 7.5 12 7.5C11.4477 7.5 11 7.94772 11 8.5C11 9.05228 11.4477 9.5 12 9.5Z"
              fill="currentColor"
            />
            <path
              d="M12 16.5C12.5523 16.5 13 16.0523 13 15.5C13 14.9477 12.5523 14.5 12 14.5C11.4477 14.5 11 14.9477 11 15.5C11 16.0523 11.4477 16.5 12 16.5Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_5928_12620">
              <rect width="50%" height="50%" fill="currentColor" transform="translate(6 6)" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
