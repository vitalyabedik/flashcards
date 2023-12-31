import { ReactNode, useState } from 'react'

import { mutationNotificationHandler, useAppDispatch } from '@/common'
import { Modal } from '@/components'
import { DeckForm, decksActions, useCreateDeckMutation } from '@/features'

export type AddDeckModalProps = {
  trigger: ReactNode
  buttonTitle: string
  values?: {
    name: string
    isPrivate?: boolean
    cover?: string | null
  }
}

export const AddDeckModal = ({ trigger, buttonTitle, values }: AddDeckModalProps): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [createDeck, { error }] = useCreateDeckMutation()
  const { setCurrentPage } = decksActions

  const dispatch = useAppDispatch()

  const closeModal = () => {
    setOpen(false)
  }

  const createDeckCallback = (data: FormData) => {
    dispatch(setCurrentPage({ currentPage: 1 }))

    mutationNotificationHandler(createDeck(data), true).then(data => {
      if (data?.status === 'success') {
        closeModal()
      }
    })
  }

  return (
    <Modal trigger={trigger} open={open} setOpen={setOpen} title="Add New Deck">
      <DeckForm
        buttonTitle={buttonTitle}
        values={values}
        onSubmit={createDeckCallback}
        onClose={closeModal}
        error={error}
      />
    </Modal>
  )
}
