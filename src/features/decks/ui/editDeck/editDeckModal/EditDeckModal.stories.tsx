import type { Meta, StoryObj } from '@storybook/react'

import { TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'
import { EditDeckModalProps, EditDeckModal } from '@/features'

const meta: Meta<typeof EditDeckModal> = {
  title: 'Decks/EditDeckModal',
  component: EditDeckModal,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const DeckWithHooks = (args: EditDeckModalProps) => {
  return <EditDeckModal {...args} values={args.values} />
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
    buttonTitle: 'Edit Deck',
    values: {
      name: 'Example input text',
      isPrivate: true,
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFfO_eNEJGw_BJiSB99LmDGCOny9NeGaDDAg&usqp=CAU',
    },
  },
  render: args => <DeckWithHooks {...args} />,
}
