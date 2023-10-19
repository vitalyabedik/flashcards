import { DeleteIcon } from '@/assets'
import { Dialog, IconButton } from '@/components'
import { useDeleteCardMutation } from '@/features'
type Props = {
  cardId: string
  deckId: string
}
export const DeleteCard = ({ cardId, deckId }: Props): JSX.Element => {
  const [deleteCard] = useDeleteCardMutation()

  const deleteCardCallback = () => {
    deleteCard({ cardId, deckId })
  }

  return (
    <Dialog
      trigger={<IconButton icon={<DeleteIcon />} size={1.6} />}
      modalHeaderTitle="Delete Card"
      itemName={cardId}
      action="removeCard"
      buttonTitle="Delete Card"
      onClick={deleteCardCallback}
    />
  )
}
