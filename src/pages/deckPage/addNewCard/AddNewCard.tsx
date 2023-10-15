import { TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'
import { AddCardModal } from '@/features'

export const AddNewCard = () => {
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
      onSubmit={() => console.log(1)}
    />
  )
}
