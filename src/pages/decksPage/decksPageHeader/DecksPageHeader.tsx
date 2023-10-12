import s from './DecksPageHeader.module.scss'

import { TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'
import { AddDeckModal, useCreateDeckMutation } from '@/features'

export const DecksPageHeader = (): JSX.Element => {
  const [createDeck] = useCreateDeckMutation()

  const createDeckCallback = (data: FormData) => {
    createDeck(data)
  }

  return (
    <div className={s.root}>
      <Typography className={s.formHeader} variant={TypographyVariant.Large} as="h1">
        Decks list
      </Typography>
      <AddDeckModal
        trigger={
          <Button>
            <Typography variant={TypographyVariant.Subtitle2} as="span">
              Add New Deck
            </Typography>
          </Button>
        }
        buttonTitle="Add New Deck"
        onSubmit={createDeckCallback}
      />
    </div>
  )
}
