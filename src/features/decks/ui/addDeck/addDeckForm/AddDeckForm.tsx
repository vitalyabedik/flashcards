import { DevTool } from '@hookform/devtools'

import s from './AddDeckForm.module.scss'

import { ImageIcon } from '@/assets'
import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, ControlledCheckbox, ControlledInput, Typography, Uploader } from '@/components'
import { AddDeckFormValues, useAddDeck } from '@/features'

type AddDeckFormProps = {
  variant: 'Add' | 'Edit'
  values?: {
    name: string
    isPrivate?: boolean
    cover?: string
  }
  onSubmit: (data: AddDeckFormValues) => void
  onClose: () => void
}

export const AddDeckForm = ({ variant, values, onSubmit, onClose }: AddDeckFormProps) => {
  const { control, handleSubmit, watch } = useAddDeck({
    name: values?.name || '',
    isPrivate: values?.isPrivate || false,
  })

  const file = watch('cover')
  const imageUrl = file ? URL.createObjectURL(file) : values?.cover

  const buttonUploadText = imageUrl ? 'Change Cover' : ' Add Cover'
  const onSubmitHandler = (data: AddDeckFormValues) => {
    onSubmit(data)
    onClose()
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
      {imageUrl && (
        <div className={s.imageBlock}>
          <img src={imageUrl} alt="Pack cover" />
        </div>
      )}
      <Uploader className={s.uploader} name="cover" control={control}>
        <Button type="button" variant={ButtonVariant.Secondary} fullWidth>
          <ImageIcon />
          <Typography variant={TypographyVariant.Subtitle2} as="span">
            {buttonUploadText}
          </Typography>
        </Button>
      </Uploader>
      <ControlledInput className={s.input} control={control} name="name" label="Name Pack" />
      <ControlledCheckbox
        className={s.checkbox}
        control={control}
        name="isPrivate"
        label="Private pack"
        position="left"
      />
      <div className={s.buttonsContainer}>
        <Button type="button" variant={ButtonVariant.Secondary} onClick={onClose}>
          <Typography variant={TypographyVariant.Subtitle2}>Cancel</Typography>
        </Button>
        <Button>
          <Typography variant={TypographyVariant.Subtitle2}>
            {variant === 'Add' && 'Add New Pack'}
            {variant === 'Edit' && 'Save Changes'}
          </Typography>
        </Button>
      </div>
      <DevTool control={control} />
    </form>
  )
}
