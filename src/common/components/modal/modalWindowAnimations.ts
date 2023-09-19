import { MotionProps } from 'framer-motion'

const overlay = {
  initial: 'closed',
  animate: 'open',
  exit: 'closed',
  variants: { closed: { opacity: 0 }, open: { opacity: 1 } },
  transition: { opacity: { duration: 0.25 } },
} satisfies MotionProps

const window = {
  initial: 'closed',
  animate: 'open',
  exit: 'closed',
  variants: { closed: { scale: 0.8, opacity: 0 }, open: { scale: 1, opacity: 1 } },
  transition: { opacity: { duration: 0.25 } },
} satisfies MotionProps

export const modalAnimations = { overlay, window }
