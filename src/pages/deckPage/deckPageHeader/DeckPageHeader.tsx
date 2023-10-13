import { Link } from 'react-router-dom'

import s from './DeckPageHeader.module.scss'

import { Route, TypographyVariant } from '@/common'
import { Button, Dropdown, Typography } from '@/components'

type Props = {
  id: string
  isOwner: boolean
}
export const DeckPageHeader = ({ id, isOwner }: Props): JSX.Element => {
  return (
    <div className={s.root}>
      <div className={s.deckOwnerWrapper}>
        <Typography variant={TypographyVariant.Large} as="h1">
          {isOwner ? 'My Deck' : 'Friends Deck'}
        </Typography>
        {isOwner && <Dropdown>sdgbgf</Dropdown>}
      </div>
      {isOwner && (
        <Button>
          <Typography variant={TypographyVariant.Subtitle2} as="span">
            Add New Card
          </Typography>
        </Button>
      )}
      {!isOwner && (
        <Button as={Link} to={`${Route.Decks}/${id}/learn`}>
          <Typography variant={TypographyVariant.Subtitle2} as="span">
            Learn Deck
          </Typography>
        </Button>
      )}
    </div>
  )
}
