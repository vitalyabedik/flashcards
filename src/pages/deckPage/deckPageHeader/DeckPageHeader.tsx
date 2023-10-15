import { Link } from 'react-router-dom'

import s from './DeckPageHeader.module.scss'

import { Route, TypographyVariant } from '@/common'
import { Button, Dropdown, Typography } from '@/components'
import { AddCardModal, GetDeckResponseType } from '@/features'
import { DeckManageTools } from '@/pages'

type Props = {
  isOwner: boolean
  deck: GetDeckResponseType
}
export const DeckPageHeader = ({ isOwner, deck }: Props): JSX.Element => {
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
      {isOwner && !!deck.cardsCount && (
        <AddCardModal
          trigger={
            <Button>
              <Typography variant={TypographyVariant.Subtitle2} as="span">
                Add New Card
              </Typography>
            </Button>
          }
          placeholder="Format type"
          options={[
            { value: 'text', title: 'Text' },
            { value: 'picture', title: 'Picture' },
          ]}
          onSubmit={() => console.log(1)}
        />
      )}
      {!isOwner && (
        <Button as={Link} to={`${Route.Decks}/${deck.id}/learn`}>
          <Typography variant={TypographyVariant.Subtitle2} as="span">
            Learn Deck
          </Typography>
        </Button>
      )}
    </div>
  )
}
