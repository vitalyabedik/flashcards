import { TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'
import { AddCardModal, useCreateCardMutation } from '@/features'

type Props = {
  id: string
}

export const AddCard = ({ id }: Props): JSX.Element => {
  const [createCard] = useCreateCardMutation()

  const createCardCallback = (body: FormData) => {
    createCard({ id, body }).unwrap()
  }

  return (
    <AddCardModal
      trigger={
        <Button>
          <Typography variant={TypographyVariant.Subtitle2} as="span">
            Add New Card
          </Typography>
        </Button>
      }
      placeholder="Data format type"
      options={[
        { value: 'text', title: 'Text' },
        { value: 'picture', title: 'Picture' },
      ]}
      onSubmit={createCardCallback}
    />
  )
}
