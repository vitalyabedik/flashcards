import { DeleteIcon, EditIcon, PlayCircleIcon } from '@/assets'
import { Dialog, IconButton } from '@/components'
import { DeckType, useDeleteDeckMutation, useMeQuery } from '@/features'

type Props = {
  deck: DeckType
}

export const DecksTableIcons = ({ deck }: Props): JSX.Element => {
  const { data: user } = useMeQuery()
  const [deleteDeck] = useDeleteDeckMutation()

  const deleteDeckCallback = (id: string) => {
    deleteDeck({ id })
  }

  return (
    <>
      <IconButton icon={<PlayCircleIcon />} size={1.6} />
      {user?.id === deck.author.id && (
        <>
          <IconButton icon={<EditIcon />} size={1.6} />
          <Dialog
            trigger={<IconButton icon={<DeleteIcon />} size={1.6} />}
            modalHeaderTitle="Delete Deck"
            itemName={deck.name}
            action="removeDeck"
            buttonTitle="Delete Deck"
            onClick={() => deleteDeckCallback(deck.id)}
          />
        </>
      )}
    </>
  )
}
