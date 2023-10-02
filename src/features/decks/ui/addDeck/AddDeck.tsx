import { AddDeckForm, AddDeckFormValues } from './addDeckForm'

import { Modal } from '@/components'

export type AddDeckProps = {
  open: boolean
  setOpen: (openState: boolean) => void
  onSubmit: (data: AddDeckFormValues) => void
}

export const AddDeck = ({ open, setOpen, onSubmit }: AddDeckProps) => {
  const closeAddDeckForm = () => {
    setOpen(false)
  }

  return (
    <Modal open={open} setOpen={setOpen} title="Add New Pack">
      <AddDeckForm onSubmit={onSubmit} onClose={closeAddDeckForm} />
    </Modal>
  )
}
