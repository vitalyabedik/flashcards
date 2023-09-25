import { MotionProps } from 'framer-motion'

const menu = {
  initial: 'closed',
  exit: 'closed',
  variants: {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.15,
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  },
} satisfies MotionProps

const item = {
  variants: {
    closed: { x: -14, opacity: 0 },
    open: { x: 0, opacity: 1 },
  },
  transition: { opacity: { duration: 0.15 } },
} satisfies MotionProps

export const dropdownAnimations = { menu, item }
