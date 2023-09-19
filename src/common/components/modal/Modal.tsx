import { ComponentPropsWithoutRef, forwardRef } from 'react'

import * as ModalPrimitive from '@radix-ui/react-dialog'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'

import s from './Modal.module.scss'

import { Close } from '@/assets'
import { Card, Typography } from '@common/components'
import { modalAnimations } from '@common/components/modal/modalWindowAnimations.ts'
import { TypographyVariant } from '@common/enums'

export type ModalProps = {
  open: boolean
  setOpen: (open: boolean) => void
  title: string
  className?: string
} & ComponentPropsWithoutRef<'div'>

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
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
                      <div className={classNames.header}>
                        <Typography variant={TypographyVariant.H2}>{title}</Typography>
                        <ModalPrimitive.Close asChild>
                          <button className={classNames.closeBtn} aria-label="Close">
                            <Close />
                          </button>
                        </ModalPrimitive.Close>
                      </div>
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
