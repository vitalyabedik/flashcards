import { SVGProps, Ref, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={19}
    height={19}
    viewBox="0 0 19 19"
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    ref={ref}
    {...props}
  >
    <path d="m17.71 16.29-3.4-3.39A7.92 7.92 0 0 0 16 8a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z" />
  </svg>
)

export default memo(forwardRef(SvgComponent))
