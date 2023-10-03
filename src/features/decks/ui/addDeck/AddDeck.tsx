import { Modal } from '@/components'
import { AddDeckForm, AddDeckFormValues } from '@/features'

export type AddDeckProps = {
  open: boolean
  imageUrl?: string
  setOpen: (openState: boolean) => void
  onSubmit: (data: AddDeckFormValues) => void
}

export const AddDeck = ({ open, imageUrl, setOpen, onSubmit }: AddDeckProps) => {
  const closeAddDeckForm = () => {
    setOpen(false)
  }

  return (
    <Modal open={open} setOpen={setOpen} title="Add New Pack">
      <AddDeckForm imageUrl={imageUrl} onSubmit={onSubmit} onClose={closeAddDeckForm} />
    </Modal>
  )
}
