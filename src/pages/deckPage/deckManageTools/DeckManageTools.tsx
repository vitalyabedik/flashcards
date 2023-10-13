import { DeleteIcon, EditIcon, PlayCircleIcon } from '@/assets'
import { Dialog, DropdownItemWithIcon, IconButton } from '@/components'
import { DeckType, EditDeckModal, useDeleteDeckMutation, useUpdateDeckMutation } from '@/features'

type Props = {
  isOwner: boolean
  variant: 'dropDown' | 'tableCell'
  deck: DeckType
}

export const DeckManageTools = ({ isOwner, variant, deck }: Props) => {
  const { id, name, isPrivate, cover } = deck
  const [deleteDeck] = useDeleteDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()

  const deleteDeckCallback = () => {
    deleteDeck({ id })
  }

  const editDeckCallback = (data: FormData) => {
    updateDeck({ id, body: data })
  }

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
      <IconButton icon={<PlayCircleIcon />} size={1.6} />
      {isOwner && variant === 'tableCell' && (
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
