import { useState } from 'react'

import { DevTool } from '@hookform/devtools'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import s from './DeckForm.module.scss'

import { ImageIcon } from '@/assets'
import { ButtonVariant, formatMutationError, TypographyVariant } from '@/common'
import { Button, ControlledCheckbox, ControlledInput, Typography, Uploader } from '@/components'
import { DeckFormValues, useDeckForm } from '@/features'

export type DeckFormProps = {
  buttonTitle: string
  values?: {
    name: string
    isPrivate?: boolean
    cover?: string | null
  }
  onSubmit: (data: FormData) => void
  onClose: () => void
  error?: FetchBaseQueryError | SerializedError | undefined
}

export const DeckForm = ({
  buttonTitle,
  values,
  onSubmit,
  onClose,
  error,
}: DeckFormProps): JSX.Element => {
  const [cover, setCover] = useState<File | null>(null)
  const [coverError, setCoverError] = useState<null | string>(null)

  // --- for toast component error
  console.log(coverError)

  const { control, handleSubmit, setError } = useDeckForm({
    name: values?.name || '',
    isPrivate: values?.isPrivate || false,
  })

  const formatError = formatMutationError(error)

  if (formatError) {
    setError('name', {
      type: 'custom',
      message: formatError || undefined,
    })
  }

  const imageUrl = cover ? URL.createObjectURL(cover) : values?.cover
  const buttonUploadText = imageUrl ? 'Change Cover' : ' Add Cover'

  const onSubmitHandler = (data: DeckFormValues) => {
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('isPrivate', `${data.isPrivate}`)
    cover && formData.append('cover', cover)

    onSubmit(formData)
  }

  const onLoadCover = (data: File) => {
    setCover(data)
    setCoverError(null)
  }

  const onLoadCoverError = (error: string) => {
    setCoverError(error)
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
      {imageUrl && (
        <div className={s.imageBlock}>
          <img src={imageUrl} alt="Pack cover" />
        </div>
      )}
      <Uploader className={s.uploader} onLoadCover={onLoadCover} onLoadError={onLoadCoverError}>
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
