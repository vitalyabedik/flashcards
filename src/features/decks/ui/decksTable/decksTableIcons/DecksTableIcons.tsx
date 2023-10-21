import { useNavigate } from 'react-router-dom'

import { DeleteIcon, EditIcon, PlayCircleIcon } from '@/assets'
import { mutationNotificationHandler } from '@/common'
import { Dialog, IconButton } from '@/components'
import { DeckType, EditDeckModal, useDeleteDeckMutation, useMeQuery } from '@/features'

type Props = {
  deck: DeckType
  isDisabled: boolean
}

export const DecksTableIcons = ({ deck, isDisabled }: Props): JSX.Element => {
  const { id, name, isPrivate, cover, author } = deck

  const { data: user } = useMeQuery()
  const [deleteDeck] = useDeleteDeckMutation()

  const navigate = useNavigate()

  const deleteDeckCallback = () => {
    mutationNotificationHandler(deleteDeck({ id }), false, `Deck is successfully deleted`)
  }

  const learnCallback = () => {
    navigate(`${id}/learn`)
  }

  return (
    <>
      <IconButton
        icon={<PlayCircleIcon />}
        size={1.6}
        onClick={learnCallback}
        disabled={isDisabled}
      />
      {user?.id === author.id && (
        <>
          <EditDeckModal
            trigger={<IconButton icon={<EditIcon />} size={1.6} disabled={isDisabled} />}
            buttonTitle="Save Changes"
            // onSubmit={editDeckCallback}
            values={{ name, cover, isPrivate }}
            id={id}
          />
          <Dialog
            trigger={<IconButton icon={<DeleteIcon />} size={1.6} disabled={isDisabled} />}
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
