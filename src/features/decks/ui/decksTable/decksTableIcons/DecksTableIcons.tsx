import { useNavigate } from 'react-router-dom'

import { DeleteIcon, EditIcon, PlayCircleIcon } from '@/assets'
import { Dialog, IconButton } from '@/components'
import {
  DeckType,
  EditDeckModal,
  useDeleteDeckMutation,
  useMeQuery,
  useUpdateDeckMutation,
} from '@/features'

type Props = {
  deck: DeckType
}

export const DecksTableIcons = ({ deck }: Props): JSX.Element => {
  const { id, name, isPrivate, cover, author } = deck

  const { data: user } = useMeQuery()
  const [deleteDeck] = useDeleteDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()

  const navigate = useNavigate()

  const deleteDeckCallback = () => {
    deleteDeck({ id })
  }

  const editDeckCallback = (data: FormData) => {
    updateDeck({ id, body: data })
  }

  const learnCallback = () => {
    navigate(`${id}/learn`)
  }

  return (
    <>
      <IconButton icon={<PlayCircleIcon />} size={1.6} onClick={learnCallback} />
      {user?.id === author.id && (
        <>
          <EditDeckModal
            trigger={<IconButton icon={<EditIcon />} size={1.6} />}
            buttonTitle="Save Changes"
            onSubmit={editDeckCallback}
            values={{ name, cover, isPrivate }}
          />
          <Dialog
            trigger={<IconButton icon={<DeleteIcon />} size={1.6} />}
            modalHeaderTitle="Delete Deck"
            itemName={name}
            action="removeDeck"
            buttonTitle="Delete Deck"
            onClick={deleteDeckCallback}
          />
        </>
      )}
    </>
  )
}
