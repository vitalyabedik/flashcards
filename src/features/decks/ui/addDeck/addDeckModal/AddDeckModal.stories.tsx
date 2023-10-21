import type { Meta, StoryObj } from '@storybook/react'

import { TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'
import { AddDeckModal, AddDeckModalProps } from '@/features'

const meta: Meta<typeof AddDeckModal> = {
  title: 'Decks/AddDeckModal',
  component: AddDeckModal,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const DeckWithHooks = (args: AddDeckModalProps) => {
  return <AddDeckModal {...args} values={args.values} />
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
  },
  render: args => <DeckWithHooks {...args} />,
}
