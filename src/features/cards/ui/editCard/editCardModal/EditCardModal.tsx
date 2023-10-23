import { ReactNode, useState } from 'react'

import { mutationNotificationHandler } from '@/common'
import { Modal, OptionType } from '@/components'
import { Card, CardForm, useUpdateCardMutation } from '@/features'

type Props = {
  trigger: ReactNode
  card: Card
  placeholder: ReactNode
  options: OptionType[]
}

export const EditCardModal = ({ trigger, card, placeholder, options }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const [updateCard, { error }] = useUpdateCardMutation()
  const { id, answer, answerImg, question, questionImg, deckId } = card
  const cardValues = { answer, answerImg, question, questionImg }

  const closeModal = () => {
    setIsOpen(false)
  }
  const onSubmit = (body: FormData) => {
    mutationNotificationHandler(updateCard({ cardId: id, deckId, body }), true).then(data => {
      if (data?.status === 'success') {
        closeModal()
      }
    })
  }

  return (
    <Modal trigger={trigger} open={isOpen} setOpen={setIsOpen} title="Edit Card">
      <CardForm
        buttonTitle="Save Changes"
        placeholder={placeholder}
        options={options}
        cardValues={cardValues}
        onSubmit={onSubmit}
        closeModal={closeModal}
        error={error}
      />
    </Modal>
  )
}
