import { DeleteIcon } from '@/assets'
import { Dialog, IconButton } from '@/components'
import { useDeleteCardMutation } from '@/features'
type Props = {
  id: string
}
export const DeleteCard = ({ id }: Props): JSX.Element => {
  const [deleteCard] = useDeleteCardMutation()

  const deleteCardCallback = () => {
    deleteCard({ id })
  }

  return (
    <Dialog
      trigger={<IconButton icon={<DeleteIcon />} size={1.6} />}
      modalHeaderTitle="Delete Card"
      itemName={id}
      action="removeCard"
      buttonTitle="Delete Card"
      onClick={deleteCardCallback}
    />
  )
}
