import { ReactNode, useState } from 'react'

import { Modal } from '@/components'
import { DeckForm } from '@/features'

export type DeckProps = {
  trigger: ReactNode
  buttonTitle: string
  values?: {
    name: string
    isPrivate?: boolean
    cover?: string
  }
  onSubmit: (data: FormData) => void
}

export const AddDeckModal = ({
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
    <Modal trigger={trigger} open={open} setOpen={setOpen} title="Add New Deck">
      <DeckForm
        buttonTitle={buttonTitle}
        values={values}
        onSubmit={onSubmit}
        onClose={closeModal}
      />
    </Modal>
  )
}
