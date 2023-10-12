import { useState } from 'react'

import { Modal } from '@/components'
import { DeckForm, DeckProps } from '@/features'

export const EditDeckModal = ({
  trigger,
  buttonTitle,
  values,
  onSubmit,
}: DeckProps): JSX.Element => {
  const [open, setOpen] = useState(false)

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <Modal trigger={trigger} open={open} setOpen={setOpen} title="Edit Deck">
      <DeckForm
        buttonTitle={buttonTitle}
        values={values}
        onSubmit={onSubmit}
        onClose={closeModal}
      />
    </Modal>
  )
}
