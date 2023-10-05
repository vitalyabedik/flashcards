import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { AddDeck, AddDeckFormValues, AddDeckProps } from '@/features'

const meta: Meta<typeof AddDeck> = {
  title: 'Decks/AddDeck',
  component: AddDeck,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const CreateDeckWithHooks = (args: AddDeckProps) => {
  return <AddDeck variant={args.variant} values={args.values} onSubmit={args.onSubmit} />
}

export const DefaultAddPack: Story = { args: { variant: 'Add' } }
export const DefaultEditPack: Story = { args: { variant: 'Edit' } }

export const ControlledAddPack: Story = {
  args: {
    variant: 'Add',
    onSubmit: (data: AddDeckFormValues) => {
      action('Add new Pack')(data)
    },
  },
  render: args => <CreateDeckWithHooks {...args} />,
}

export const ControlledEditPack: Story = {
  args: {
    variant: 'Edit',
    values: {
      name: 'Example input text',
      isPrivate: true,
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFfO_eNEJGw_BJiSB99LmDGCOny9NeGaDDAg&usqp=CAU',
    },
    onSubmit: (data: AddDeckFormValues) => {
      action('Add new Pack')(data)
    },
  },
  render: args => <CreateDeckWithHooks {...args} />,
}
