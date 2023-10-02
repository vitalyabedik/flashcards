import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, ControlledCheckbox, ControlledInput, Typography } from '@/components'
import { AddDeckProps } from '@/features/decks/ui/addDeck'
import { useAddDeck } from '@/features/decks/ui/addDeck/addDeckForm/useAddDeck.ts'

type AddDeckFormProps = { onClose: () => void } & Pick<AddDeckProps, 'onSubmit'>

export const AddDeckForm = ({ onSubmit, onClose }: AddDeckFormProps) => {
  const { control, handleSubmit } = useAddDeck()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ControlledInput
        control={control}
        name="newPackName"
        placeholder="Name Pack"
        label="Name Pack"
      />
      <ControlledCheckbox control={control} name="packPrivateState" label="Private pack" />
      <div>
        <Button type="reset" variant={ButtonVariant.Secondary} onClick={onClose}>
          <Typography variant={TypographyVariant.Subtitle2}>Cancel</Typography>
        </Button>

        <Button>
          <Typography variant={TypographyVariant.Subtitle2}>Add New Pack</Typography>
        </Button>
      </div>
    </form>
  )
}
