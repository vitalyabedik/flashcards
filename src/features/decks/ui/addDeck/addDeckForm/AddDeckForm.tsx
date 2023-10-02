import { DevTool } from '@hookform/devtools'
import { UseFormRegister } from 'react-hook-form'

import s from './AddDeckForm.module.scss'
import { AddDeckFormValues, useAddDeck } from './useAddDeck'

import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, ControlledCheckbox, ControlledInput, Typography } from '@/components'

type AddDeckFormProps = {
  onSubmit: (data: AddDeckFormValues) => void
  onClose: () => void
}

export const AddDeckForm = ({ onSubmit, onClose }: AddDeckFormProps) => {
  const { control, handleSubmit, register } = useAddDeck()

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <ImageUploader register={register} />
      <ControlledInput className={s.input} control={control} name="newPackName" label="Name Pack" />
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

type ImageUploaderProps = {
  image?: string
  register: UseFormRegister<AddDeckFormValues>
}

export const ImageUploader = ({ image, register }: ImageUploaderProps) => {
  return (
    <Typography className={s.uploader} variant={TypographyVariant.Subtitle2} as="label">
      <Button type="button" variant={ButtonVariant.Secondary} fullWidth>
        {image && (
          <Typography variant={TypographyVariant.Subtitle2} as="span">
            Change Cover
          </Typography>
        )}
        {!image && (
          <Typography variant={TypographyVariant.Subtitle2} as="span">
            Add Cover
          </Typography>
        )}
      </Button>
      <input className={s.fileInput} type="file" {...register('packImage')} />
    </Typography>
  )
}
