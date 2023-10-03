import { useState } from 'react'

import { TypographyVariant } from '@/common'
import { Button, Modal, Typography } from '@/components'
import { AddDeckForm, AddDeckFormValues } from '@/features'

export type AddDeckProps = {
  onSubmit: (data: AddDeckFormValues) => void
}

export const AddDeck = ({ onSubmit }: AddDeckProps) => {
  const [open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(true)
  }
  const closeModal = () => {
    setOpen(false)
  }

  return (
    <>
      <Button onClick={openModal}>
        <Typography variant={TypographyVariant.Subtitle2} as="span">
          Add Deck
        </Typography>
      </Button>
      <Modal open={open} setOpen={setOpen} title="Add New Pack">
        <AddDeckForm onSubmit={onSubmit} onClose={closeModal} />
      </Modal>
    </>
  )
}
