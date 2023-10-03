import { useState } from 'react'

import { TypographyVariant } from '@/common'
import { Button, Modal, Typography } from '@/components'
import { AddDeckForm, AddDeckFormValues } from '@/features'

export type AddDeckProps = {
  variant: 'Add' | 'Edit'
  values?: {
    name: string
    isPrivate?: boolean
    cover?: string
  }
  onSubmit: (data: AddDeckFormValues) => void
}

export const AddDeck = ({ variant, values, onSubmit }: AddDeckProps) => {
  const [open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(true)
  }
  const closeModal = () => {
    setOpen(false)
  }
  const modalHeaderTitle = variant === 'Add' ? 'Add New Pack' : 'Edit Pack'

  return (
    <>
      <Button onClick={openModal}>
        <Typography variant={TypographyVariant.Subtitle2} as="span">
          Add New Pack
        </Typography>
      </Button>

      <Modal open={open} setOpen={setOpen} title={modalHeaderTitle}>
        <AddDeckForm variant={variant} values={values} onSubmit={onSubmit} onClose={closeModal} />
      </Modal>
    </>
  )
}
