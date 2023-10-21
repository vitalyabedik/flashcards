import { useState } from 'react'

import { mutationNotificationHandler } from '@/common'
import { Modal } from '@/components'
import { DeckForm, AddDeckModalProps, useUpdateDeckMutation } from '@/features'

export type EditDeckModalProps = AddDeckModalProps & {
  id: string
}

export const EditDeckModal = ({
  trigger,
  buttonTitle,
  values,
  id,
}: EditDeckModalProps): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [updateDeck, { error }] = useUpdateDeckMutation()

  const closeModal = () => {
    setOpen(false)
  }

  const editDeckCallback = (data: FormData) => {
    mutationNotificationHandler(updateDeck({ id, body: data }), true).then(data => {
      if (data?.status === 'success') {
        closeModal()
      }
    })
  }

  return (
    <Modal trigger={trigger} open={open} setOpen={setOpen} title="Edit Deck">
      <DeckForm
        buttonTitle={buttonTitle}
        values={values}
        onSubmit={editDeckCallback}
        onClose={closeModal}
        error={error}
      />
    </Modal>
  )
}
