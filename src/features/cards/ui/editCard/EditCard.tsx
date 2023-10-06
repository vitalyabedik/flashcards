import { ReactNode, useState } from 'react'

import { CardType, EditCardForm } from './editCardForm'
import { EditCardFormValues } from './editCardForm/useEditCard'

import { Modal, OptionType } from '@/components'

type Props = {
  trigger: ReactNode
  card: CardType
  placeholder: ReactNode
  options: OptionType[]
  onSubmit: (data: EditCardFormValues) => void
}

export const EditCard = ({ trigger, card, placeholder, options, onSubmit }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true)

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Modal trigger={trigger} open={isOpen} setOpen={setIsOpen} title="Edit Card">
      <EditCardForm
        card={card}
        placeholder={placeholder}
        options={options}
        onSubmit={onSubmit}
        closeModal={closeModal}
      />
    </Modal>
  )
}
