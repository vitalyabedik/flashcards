import { TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'
import { AddCardModal, useCreateCardMutation } from '@/features'

type Props = {
  id: string
}

export const AddNewCard = ({ id }: Props) => {
  const [createCard] = useCreateCardMutation()

  const createCardCallback = (body: FormData) => {
    createCard({ id, body })
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
