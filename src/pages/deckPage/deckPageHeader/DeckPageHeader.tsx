import { Link } from 'react-router-dom'

import s from './DeckPageHeader.module.scss'

import { Route, TypographyVariant } from '@/common'
import { Button, Dropdown, Typography } from '@/components'
import { AddCard, GetDeckResponseType } from '@/features'
import { DeckManageTools } from '@/pages'

type Props = {
  isOwner: boolean
  isEmptyCard: boolean
  deck: GetDeckResponseType
}
export const DeckPageHeader = ({ isOwner, isEmptyCard, deck }: Props): JSX.Element => {
  return (
    <div className={s.root}>
      <div className={s.deckOwnerWrapper}>
        <Typography variant={TypographyVariant.Large} as="h1">
          {isOwner ? 'My Deck' : 'Friends Deck'}
        </Typography>
        {isOwner && !!deck.cardsCount && (
          <Dropdown>
            <DeckManageTools isOwner={isOwner} variant="dropDown" deck={deck} />
          </Dropdown>
        )}
      </div>
      {isOwner && !!deck.cardsCount && <AddCard />}
      {!isOwner && isEmptyCard && (
        <Button as={Link} to={`${Route.Decks}/${deck.id}/learn`}>
          <Typography variant={TypographyVariant.Subtitle2} as="span">
            Learn Deck
          </Typography>
        </Button>
      )}
    </div>
  )
}
