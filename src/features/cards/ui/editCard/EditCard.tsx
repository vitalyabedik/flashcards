import { EditIcon } from '@/assets'
import { IconButton } from '@/components'
import { Card, EditCardModal } from '@/features'

type Props = {
  card: Card
}
export const EditCard = ({ card }: Props): JSX.Element => {
  return (
    <EditCardModal
      trigger={<IconButton icon={<EditIcon />} size={1.6} />}
      placeholder="Data format type"
      card={card}
      options={[
        { value: 'text', title: 'Text' },
        { value: 'picture', title: 'Picture' },
      ]}
    />
  )
}
