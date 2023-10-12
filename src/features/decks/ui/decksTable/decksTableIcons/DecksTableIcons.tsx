import { DeleteIcon, EditIcon, PlayCircleIcon } from '@/assets'
import { Dialog, IconButton } from '@/components'
import {
  DeckType,
  EditDeckModal,
  useDeleteDeckMutation,
  useMeQuery,
  // useUpdateDeckMutation,
} from '@/features'

type Props = {
  deck: DeckType
}

export const DecksTableIcons = ({ deck }: Props): JSX.Element => {
  const { data: user } = useMeQuery()
  const [deleteDeck] = useDeleteDeckMutation()
  // const [updateDeck] = useUpdateDeckMutation()

  const deleteDeckCallback = (id: string) => {
    deleteDeck({ id })
  }

  // const updateDeckCallback = (id: string, data: any) => {
  //   updateDeck({ id, body: data })
  // }

  return (
    <>
      <IconButton icon={<PlayCircleIcon />} size={1.6} />
      {user?.id === deck.author.id && (
        <>
          <EditDeckModal
            trigger={<IconButton icon={<EditIcon />} size={1.6} />}
            buttonTitle="Save Changes"
            onSubmit={() => {}}
          />
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
