import { ReactNode, useState } from 'react'

import { useParams } from 'react-router-dom'

import { mutationNotificationHandler } from '@/common'
import { Modal, OptionType } from '@/components'
import { CardForm, useCreateCardMutation } from '@/features'

type Props = {
  trigger: ReactNode
  placeholder: ReactNode
  options: OptionType[]
}

export const AddCardModal = ({ trigger, placeholder, options }: Props): JSX.Element => {
  const { id = '' } = useParams<{ id: string }>()
  const [isOpen, setIsOpen] = useState(false)
  const [createCard, { error }] = useCreateCardMutation()

  console.log(error)
  const closeModal = () => {
    setIsOpen(false)
  }
  const onSubmit = (body: FormData) => {
    mutationNotificationHandler(createCard({ id, body }), true).then(data => {
      if (data?.status === 'success') {
        closeModal()
      }
    })
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
