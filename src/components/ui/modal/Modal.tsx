import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as ModalPrimitive from '@radix-ui/react-dialog'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'

import s from './Modal.module.scss'
import { modalAnimations } from './modalWindowAnimations'

import { Close } from '@/assets'
import { TypographyVariant } from '@/common'
import { Card, Typography } from '@/components'

export type ModalProps = {
  open: boolean
  setOpen: (open: boolean) => void
  title: string
} & ComponentPropsWithoutRef<'div'>

export const Modal = forwardRef<ElementRef<'div'>, ModalProps>(
  ({ open, setOpen, title, className, children, ...props }, ref): JSX.Element => {
    const classNames = {
      root: cn(s.root, className),
      overlay: s.overlay,
      header: s.header,
      closeBtn: s.closeBtn,
    }

    return (
      <ModalPrimitive.Root open={open} onOpenChange={setOpen}>
        <AnimatePresence>
          {open && (
            <ModalPrimitive.Portal forceMount>
              <motion.div {...modalAnimations.overlay}>
                <ModalPrimitive.Overlay className={classNames.overlay} forceMount />
              </motion.div>
              <div ref={ref} className={classNames.root} {...props}>
                <ModalPrimitive.Content asChild forceMount>
                  <motion.div {...modalAnimations.window}>
                    <Card>
                      <header className={classNames.header}>
                        <Typography variant={TypographyVariant.H2} as="h2">
                          {title}
                        </Typography>
                        <ModalPrimitive.Close asChild>
                          <button className={classNames.closeBtn} aria-label="Close">
                            <Close />
                          </button>
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
