import { ReactNode, useState } from 'react'

import { AddCardForm } from '../addCardForm'

import { Modal, OptionType } from '@/components'

type Props = {
  trigger: ReactNode
  placeholder: ReactNode
  options: OptionType[]
  onSubmit: (data: FormData) => void
}

export const AddCardModal = ({ trigger, placeholder, options, onSubmit }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Modal trigger={trigger} open={isOpen} setOpen={setIsOpen} title="Add New Card">
      <AddCardForm
        placeholder={placeholder}
        options={options}
        onSubmit={onSubmit}
        closeModal={closeModal}
      />
    </Modal>
  )
}
