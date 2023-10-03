import { DevTool } from '@hookform/devtools'

import { Uploader } from '../uploader/Uploader'

import s from './AddDeckForm.module.scss'

import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, ControlledCheckbox, ControlledInput, Typography } from '@/components'
import { AddDeckFormValues, useAddDeck } from '@/features'

type AddDeckFormProps = {
  imageUrl?: string
  onSubmit: (data: AddDeckFormValues) => void
  onClose: () => void
}

export const AddDeckForm = ({ imageUrl, onSubmit, onClose }: AddDeckFormProps) => {
  const { control, handleSubmit } = useAddDeck()
  const buttonUploadText = imageUrl ? 'Change Cover' : ' Add Cover'

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Uploader className={s.uploader} name={'packImage'} control={control}>
        <Button type="button" variant={ButtonVariant.Secondary} fullWidth>
          <Typography variant={TypographyVariant.Subtitle2} as="span">
            {buttonUploadText}
          </Typography>
        </Button>
      </Uploader>
      <ControlledInput className={s.input} control={control} name="packName" label="Name Pack" />
      <ControlledCheckbox
        className={s.checkbox}
        control={control}
        name="packPrivateState"
        label="Private pack"
        position="left"
      />
      <div className={s.buttonsContainer}>
        <Button type="button" variant={ButtonVariant.Secondary} onClick={onClose}>
          <Typography variant={TypographyVariant.Subtitle2}>Cancel</Typography>
        </Button>
        <Button>
          <Typography variant={TypographyVariant.Subtitle2}>Add New Pack</Typography>
        </Button>
      </div>
      <DevTool control={control} />
    </form>
  )
}
