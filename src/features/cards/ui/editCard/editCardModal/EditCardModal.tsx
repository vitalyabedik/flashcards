import { ReactNode, useState } from 'react'

import { Modal, OptionType } from '@/components'
import { Card, CardForm } from '@/features'

type Props = {
  trigger: ReactNode
  card: Card
  placeholder: ReactNode
  options: OptionType[]
  onSubmit: (data: FormData) => void
}

export const EditCardModal = ({
  trigger,
  card,
  placeholder,
  options,
  onSubmit,
}: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  console.log(card)
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Modal trigger={trigger} open={isOpen} setOpen={setIsOpen} title="Edit Card">
      <CardForm
        placeholder={placeholder}
        options={options}
        onSubmit={onSubmit}
        closeModal={closeModal}
      />
    </Modal>
  )
}
