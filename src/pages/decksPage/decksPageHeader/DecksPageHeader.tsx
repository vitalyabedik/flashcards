import s from './DecksPageHeader.module.scss'

import { TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'
import { AddDeckModal } from '@/features'

type Props = {
  isDisabled?: boolean
}

export const DecksPageHeader = ({ isDisabled }: Props): JSX.Element => {
  return (
    <div className={s.root}>
      <Typography className={s.formHeader} variant={TypographyVariant.Large} as="h1">
        Decks list
      </Typography>
      <AddDeckModal
        trigger={
          <Button disabled={isDisabled}>
            <Typography variant={TypographyVariant.Subtitle2} as="span">
              Add New Deck
            </Typography>
          </Button>
        }
        buttonTitle="Add New Deck"
      />
    </div>
  )
}
