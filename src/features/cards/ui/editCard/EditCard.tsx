import { ReactNode } from 'react'

import { Card, EditCardModal, useUpdateCardMutation } from '@/features'

type Props = {
  card: Card
  trigger: ReactNode
}
export const EditCard = ({ card, trigger }: Props): JSX.Element => {
  const { id, answer, answerImg, question, questionImg } = card

  const [updateCard] = useUpdateCardMutation()
  const updateCardCallBack = (body: FormData) => {
    updateCard({ id, body })
  }

  return (
    <EditCardModal
      trigger={trigger}
      placeholder={'Data format type'}
      cardValues={{ answer, question, answerImg, questionImg }}
      options={[
        { value: 'text', title: 'Text' },
        { value: 'picture', title: 'Picture' },
      ]}
      onSubmit={updateCardCallBack}
    />
  )
}
