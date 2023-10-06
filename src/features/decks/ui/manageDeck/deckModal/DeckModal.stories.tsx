import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'
import { DeckModal, AddDeckProps, DeckFormValues } from '@/features'

const meta: Meta<typeof DeckModal> = {
  title: 'Decks/DeckModal',
  component: DeckModal,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const DeckWithHooks = (args: AddDeckProps) => {
  return <DeckModal {...args} values={args.values} onSubmit={args.onSubmit} />
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
    modalTitle: 'Add new Deck',
    buttonTitle: 'Add Deck',
    onSubmit: (data: DeckFormValues) => {
      action('Add new Deck')(data)
    },
  },
  render: args => <DeckWithHooks {...args} />,
}

export const ControlledEditDeck: Story = {
  args: {
    trigger: (
      <Button>
        <Typography variant={TypographyVariant.Subtitle2} as="span">
          Edit Deck
        </Typography>
      </Button>
    ),
    modalTitle: 'Edit Deck',
    buttonTitle: 'Edit Deck',
    values: {
      name: 'Example input text',
      isPrivate: true,
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFfO_eNEJGw_BJiSB99LmDGCOny9NeGaDDAg&usqp=CAU',
    },
    onSubmit: (data: DeckFormValues) => {
      action('Add new Deck')(data)
    },
  },
  render: args => <DeckWithHooks {...args} />,
}
