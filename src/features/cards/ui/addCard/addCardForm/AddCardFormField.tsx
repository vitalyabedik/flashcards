import { Control } from 'react-hook-form'

import s from './AddCardForm.module.scss'

import { ImageIcon } from '@/assets'
import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, ControlledInput, Typography, Uploader } from '@/components'
import { AddCardFormValues } from '@features/cards/ui/addCard/addCardForm/useAddCard.ts'

type Props = {
  dataFieldFormat: string
  imageUrl: string | null
  control: Control<AddCardFormValues>
  onLoadCover: (data: File) => void
  onLoadError: (error: string) => void
}

export const AddCardFormField = ({
  dataFieldFormat,
  imageUrl,
  control,
  onLoadCover,
  onLoadError,
}: Props) => {
  return (
    <>
      {dataFieldFormat === 'text' && (
        <ControlledInput name="question" control={control} label="Question" />
      )}
      {dataFieldFormat === 'picture' && (
        <>
          {imageUrl && (
            <div className={s.imageBlock}>
              <img src={imageUrl} alt="Card cover" />
            </div>
          )}
          <Uploader onLoadCover={onLoadCover} onLoadError={onLoadError}>
            <Button type="button" variant={ButtonVariant.Secondary} fullWidth>
              <ImageIcon />
              <Typography variant={TypographyVariant.Subtitle2} as="span">
                {'Add card'}
              </Typography>
            </Button>
          </Uploader>
        </>
      )}
    </>
  )
}
