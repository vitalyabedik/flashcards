import { DevTool } from '@hookform/devtools'

import s from './DeckForm.module.scss'

import { ImageIcon } from '@/assets'
import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, ControlledCheckbox, ControlledInput, Typography, Uploader } from '@/components'
import { DeckFormValues, useDeckForm } from '@/features'

type AddDeckFormProps = {
  buttonTitle: string
  values?: {
    name: string
    isPrivate?: boolean
    cover?: string
  }
  onSubmit: (data: DeckFormValues) => void
  onClose: () => void
}

export const DeckForm = ({ buttonTitle, values, onSubmit, onClose }: AddDeckFormProps) => {
  const { control, handleSubmit, watch } = useDeckForm({
    name: values?.name || '',
    isPrivate: values?.isPrivate || false,
  })

  const file = watch('cover')
  const imageUrl = file ? URL.createObjectURL(file) : values?.cover

  const buttonUploadText = imageUrl ? 'Change Cover' : ' Add Cover'
  const onSubmitHandler = (data: DeckFormValues) => {
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
          <Typography variant={TypographyVariant.Subtitle2}>{buttonTitle}</Typography>
        </Button>
      </div>
      <DevTool control={control} />
    </form>
  )
}
