import { ReactNode, useState } from 'react'

import { Modal } from '@/components'
import { DeckForm, DeckFormValues } from '@/features'

export type AddDeckProps = {
  trigger: ReactNode
  modalTitle: string
  buttonTitle: string
  values?: {
    name: string
    isPrivate?: boolean
    cover?: string
  }
  onSubmit: (data: DeckFormValues) => void
}

export const DeckModal = ({ trigger, modalTitle, buttonTitle, values, onSubmit }: AddDeckProps) => {
  const [open, setOpen] = useState(false)

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <Modal trigger={trigger} open={open} setOpen={setOpen} title={modalTitle}>
      <DeckForm
        buttonTitle={buttonTitle}
        values={values}
        onSubmit={onSubmit}
        onClose={closeModal}
      />
    </Modal>
  )
}
