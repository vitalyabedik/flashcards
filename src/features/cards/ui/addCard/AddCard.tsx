import { ReactNode, useState } from 'react'

import { AddCardForm, CardType } from './addCardForm'
import { AddCardFormValues } from './addCardForm/useAddCard'

import { Modal, OptionType } from '@/components'

type Props = {
  trigger: ReactNode
  card: CardType
  placeholder: ReactNode
  options: OptionType[]
  onSubmit: (data: AddCardFormValues) => void
}

export const AddCard = ({ trigger, card, placeholder, options, onSubmit }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true)

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Modal trigger={trigger} open={isOpen} setOpen={setIsOpen} title="Add New Card">
      <AddCardForm
        card={card}
        placeholder={placeholder}
        options={options}
        onSubmit={onSubmit}
        closeModal={closeModal}
      />
    </Modal>
  )
}
