import { ReactNode, useState } from 'react'

import { AddCardForm, CardType } from './addCardForm'
import { AddCardFormValues } from './addCardForm/useAddCard'

import { Button, Modal, OptionType } from '@/components'

type Props = {
  card: CardType
  placeholder: ReactNode
  options: OptionType[]
  onSubmit: (data: AddCardFormValues) => void
}

export const AddCard = ({ card, placeholder, options, onSubmit }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={openModal}>Add New Card</Button>
      <Modal open={isOpen} setOpen={setIsOpen} title="Add New Card">
        <AddCardForm
          card={card}
          placeholder={placeholder}
          options={options}
          onSubmit={onSubmit}
          closeModal={closeModal}
        />
      </Modal>
    </>
  )
}
