import s from './DecksPageHeader.module.scss'

import { mutationNotificationHandler, TypographyVariant, useAppDispatch } from '@/common'
import { Button, Typography } from '@/components'
import { AddDeckModal, decksActions, useCreateDeckMutation } from '@/features'

type Props = {
  isDisabled?: boolean
}

export const DecksPageHeader = ({ isDisabled }: Props): JSX.Element => {
  const { setCurrentPage } = decksActions

  const dispatch = useAppDispatch()

  const [createDeck] = useCreateDeckMutation()

  const createDeckCallback = (data: FormData) => {
    dispatch(setCurrentPage({ currentPage: 1 }))
    mutationNotificationHandler(createDeck(data))
  }

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
        onSubmit={createDeckCallback}
      />
    </div>
  )
}
