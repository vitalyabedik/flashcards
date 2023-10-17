import { useNavigate } from 'react-router-dom'

import { DeleteIcon, EditIcon, PlayCircleIcon } from '@/assets'
import { Route } from '@/common'
import { Dialog, DropdownItemWithIcon, IconButton } from '@/components'
import {
  EditDeckModal,
  GetDeckResponseType,
  useDeleteDeckMutation,
  useUpdateDeckMutation,
} from '@/features'

type Props = {
  isOwner: boolean
  variant: 'dropDown' | 'tableCell'
  deck: GetDeckResponseType
}

export const DeckManageTools = ({ isOwner, variant, deck }: Props): JSX.Element => {
  const { id, name, isPrivate, cover } = deck
  const [deleteDeck] = useDeleteDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()
  const navigate = useNavigate()
  const toLearnDeck = () => {
    navigate(`${Route.Decks}/${deck.id}/learn`)
  }
  const deleteDeckCallback = () => {
    deleteDeck({ id })
  }

  const editDeckCallback = (data: FormData) => {
    updateDeck({ id, body: data })
  }

  const learnIcon =
    variant === 'dropDown' ? (
      <DropdownItemWithIcon
        icon={<PlayCircleIcon size={1.6} />}
        text="Learn"
        onSelect={toLearnDeck}
      />
    ) : (
      <IconButton icon={<PlayCircleIcon />} size={1.6} />
    )

  const editIcon =
    variant === 'dropDown' ? (
      <DropdownItemWithIcon icon={<EditIcon size={1.6} />} text="Edit" />
    ) : (
      <IconButton icon={<EditIcon />} size={1.6} />
    )

  const deleteIcon =
    variant === 'dropDown' ? (
      <DropdownItemWithIcon icon={<DeleteIcon size={1.6} />} text="Delete" />
    ) : (
      <IconButton icon={<DeleteIcon />} size={1.6} />
    )

  return (
    <>
      {learnIcon}
      {isOwner && variant === 'dropDown' && (
        <>
          <EditDeckModal
            trigger={editIcon}
            buttonTitle="Save Changes"
            onSubmit={editDeckCallback}
            values={{ name, cover, isPrivate }}
          />
          <Dialog
            trigger={deleteIcon}
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
