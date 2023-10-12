import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'
import { AddDeckModal, DeckProps } from '@/features'

const meta: Meta<typeof AddDeckModal> = {
  title: 'Decks/AddDeckModal',
  component: AddDeckModal,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const DeckWithHooks = (args: DeckProps) => {
  return <AddDeckModal {...args} values={args.values} onSubmit={args.onSubmit} />
}

export const ControlledAddDeck: Story = {
  args: {
    trigger: (
      <Button>
        <Typography variant={TypographyVariant.Subtitle2} as="span">
          Add new Deck
        </Typography>
      </Button>
    ),
    buttonTitle: 'Add Deck',
    onSubmit: (data: FormData) => {
      action('Add new Deck')(data)
    },
  },
  render: args => <DeckWithHooks {...args} />,
}
