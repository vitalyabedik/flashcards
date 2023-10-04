import { ReactNode, useState } from 'react'

import s from './EditCard.module.scss'
import { EditCardForm, CardType } from './editCardForm'
import { EditCardFormValues } from './editCardForm/useEditCard'

import { EditIcon } from '@/assets'
import { Modal, OptionType } from '@/components'

type Props = {
  card: CardType
  placeholder: ReactNode
  options: OptionType[]
  onSubmit: (data: EditCardFormValues) => void
}

export const EditCard = ({ card, placeholder, options, onSubmit }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button className={s.editCardIcon} onClick={openModal}>
        <EditIcon size={1.6} />
      </button>
      <Modal open={isOpen} setOpen={setIsOpen} title="Edit Card">
        <EditCardForm
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
