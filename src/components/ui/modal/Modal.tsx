import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'

import * as ModalPrimitive from '@radix-ui/react-dialog'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'

import s from './Modal.module.scss'
import { modalAnimations } from './modalWindowAnimations'

import { CloseIcon } from '@/assets'
import { TypographyVariant } from '@/common'
import { Card, IconButton, Typography } from '@/components'

export type ModalProps = {
  trigger: ReactNode
  open: boolean
  setOpen: (open: boolean) => void
  title: string
} & ComponentPropsWithoutRef<'div'>

export const Modal = forwardRef<ElementRef<'div'>, ModalProps>(
  ({ trigger, open, setOpen, title, className, children, ...restProps }, ref): JSX.Element => {
    const classNames = {
      root: cn(s.root, className),
      overlay: s.overlay,
      header: s.header,
    }

    return (
      <ModalPrimitive.Root open={open} onOpenChange={setOpen}>
        <ModalPrimitive.Trigger asChild>{trigger}</ModalPrimitive.Trigger>
        <AnimatePresence>
          {open && (
            <ModalPrimitive.Portal forceMount>
              <motion.div {...modalAnimations.overlay}>
                <ModalPrimitive.Overlay className={classNames.overlay} forceMount />
              </motion.div>
              <div ref={ref} className={classNames.root} {...restProps}>
                <ModalPrimitive.Content asChild forceMount>
                  <motion.div {...modalAnimations.window}>
                    <Card>
                      <header className={classNames.header}>
                        <Typography variant={TypographyVariant.H2} as="h2">
                          {title}
                        </Typography>
                        <ModalPrimitive.Close asChild>
                          <IconButton icon={<CloseIcon />} aria-label="Close" />
                        </ModalPrimitive.Close>
                      </header>
                      <div>{children}</div>
                    </Card>
                  </motion.div>
                </ModalPrimitive.Content>
              </div>
            </ModalPrimitive.Portal>
          )}
        </AnimatePresence>
      </ModalPrimitive.Root>
    )
  }
)
