import { Control } from 'react-hook-form'

import { CardFormValuesType } from '../useAddForm'

import s from './CardFormField.module.scss'

import { ImageIcon } from '@/assets'
import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, ControlledInput, Typography, Uploader } from '@/components'

type Props = {
  dataFieldFormat: string
  imageUrl: string | null | undefined
  name: 'question' | 'answer'
  label: string
  control: Control<CardFormValuesType>
  onLoadCover: (data: File) => void
  onLoadError: (error: string) => void
}

export const CardFormField = ({
  dataFieldFormat,
  imageUrl,
  name,
  label,
  control,
  onLoadCover,
  onLoadError,
}: Props) => {
  const buttonUploadText = imageUrl ? 'Change Cover' : ' Add Cover'

  return (
    <>
      {dataFieldFormat === 'text' && (
        <ControlledInput className={s.fieldItem} name={name} control={control} label={label} />
      )}
      {dataFieldFormat === 'picture' && (
        <>
          {imageUrl && (
            <div className={s.imageBlock}>
              <img src={imageUrl} alt="Card cover" />
            </div>
          )}
          <Uploader onLoadCover={onLoadCover} onLoadError={onLoadError}>
            <Button
              className={s.fieldItem}
              type="button"
              variant={ButtonVariant.Secondary}
              fullWidth
            >
              <ImageIcon />
              <Typography variant={TypographyVariant.Subtitle2} as="span">
                {buttonUploadText}
              </Typography>
            </Button>
          </Uploader>
        </>
      )}
    </>
  )
}
