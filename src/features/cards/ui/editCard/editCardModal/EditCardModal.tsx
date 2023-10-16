import { ReactNode, useState } from 'react'

import { Modal, OptionType } from '@/components'
import { CardForm } from '@/features'

export type CardValues = {
  answer: string
  question: string
  answerImg: string | null
  questionImg: string | null
}

type Props = {
  trigger: ReactNode
  cardValues: CardValues
  placeholder: ReactNode
  options: OptionType[]
  onSubmit: (data: FormData) => void
}

export const EditCardModal = ({
  trigger,
  cardValues,
  placeholder,
  options,
  onSubmit,
}: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
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
      />
    </Modal>
  )
}
