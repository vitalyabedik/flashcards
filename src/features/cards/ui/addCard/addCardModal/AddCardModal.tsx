import { ReactNode, useState } from 'react'

import { Modal, OptionType } from '@/components'
import { CardForm } from '@/features'

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
      <CardForm
        buttonTitle="Add New Card"
        placeholder={placeholder}
        options={options}
        onSubmit={onSubmit}
        closeModal={closeModal}
      />
    </Modal>
  )
}
