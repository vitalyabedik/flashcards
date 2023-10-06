import { useState } from 'react'

import { TypographyVariant } from '@/common'
import { Button, Modal, Typography } from '@/components'
import { DeckForm, DeckFormValues } from '@/features'

export type AddDeckProps = {
  modalTitle: string
  buttonTitle: string
  values?: {
    name: string
    isPrivate?: boolean
    cover?: string
  }
  onSubmit: (data: DeckFormValues) => void
}

export const DeckModal = ({ modalTitle, buttonTitle, values, onSubmit }: AddDeckProps) => {
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
          {buttonTitle}
        </Typography>
      </Button>

      <Modal open={open} setOpen={setOpen} title={modalTitle}>
        <DeckForm
          buttonTitle={buttonTitle}
          values={values}
          onSubmit={onSubmit}
          onClose={closeModal}
        />
      </Modal>
    </>
  )
}
