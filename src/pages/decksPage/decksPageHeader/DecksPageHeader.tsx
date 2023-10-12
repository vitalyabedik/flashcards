import s from './DecksPageHeader.module.scss'

import { TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'
import { AddDeckModal } from '@/features'

export const DecksPageHeader = (): JSX.Element => {
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
        onSubmit={() => {}}
      />
    </div>
  )
}
