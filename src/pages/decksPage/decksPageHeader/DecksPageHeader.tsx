import s from './DecksPageHeader.module.scss'

import { TypographyVariant, useAppDispatch } from '@/common'
import { Button, Typography } from '@/components'
import { AddDeckModal, decksActions, useCreateDeckMutation } from '@/features'

export const DecksPageHeader = (): JSX.Element => {
  const { setCurrentPage } = decksActions

  const dispatch = useAppDispatch()

  const [createDeck] = useCreateDeckMutation()

  const createDeckCallback = (data: FormData) => {
    dispatch(setCurrentPage({ currentPage: 1 }))
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
