import { EditIcon } from '@/assets'
import { IconButton } from '@/components'
import { Card, EditCardModal, useUpdateCardMutation } from '@/features'

type Props = {
  card: Card
}
export const EditCard = ({ card }: Props): JSX.Element => {
  const { id, answer, answerImg, question, questionImg } = card

  const [updateCard] = useUpdateCardMutation()
  const updateCardCallBack = (body: FormData) => {
    updateCard({ id, body })
  }

  return (
    <EditCardModal
      trigger={<IconButton icon={<EditIcon />} size={1.6} />}
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
