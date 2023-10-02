import s from './AddDeckForm.module.scss'
import { AddDeckFormValues, useAddDeck } from './useAddDeck'

import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, ControlledCheckbox, ControlledInput, Typography } from '@/components'

type AddDeckFormProps = {
  onSubmit: (data: AddDeckFormValues) => void
  onClose: () => void
}

export const AddDeckForm = ({ onSubmit, onClose }: AddDeckFormProps) => {
  const { control, handleSubmit } = useAddDeck()

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <ControlledInput className={s.input} control={control} name="newPackName" label="Name Pack" />
      <ControlledCheckbox
        className={s.checkbox}
        control={control}
        name="packPrivateState"
        label="Private pack"
        position="left"
      />
      <div className={s.buttonsContainer}>
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
