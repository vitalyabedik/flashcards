import { ReactNode } from 'react'

import { Card, EditCardModal, useUpdateCardMutation } from '@/features'

type Props = {
  card: Card
  trigger: ReactNode
}
export const EditCard = ({ card, trigger }: Props): JSX.Element => {
  const { id } = card
  const [updateCard] = useUpdateCardMutation()
  const updateCardCallBack = (body: FormData) => {
    updateCard({ id, body })
  }

  return (
    <EditCardModal
      trigger={trigger}
      card={card}
      placeholder={'Data format type'}
      options={[
        { value: 'text', title: 'Text' },
        { value: 'picture', title: 'Picture' },
      ]}
      onSubmit={updateCardCallBack}
    />
  )
}
