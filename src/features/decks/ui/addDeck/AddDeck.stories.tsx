import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { AddDeck, AddDeckFormValues, AddDeckProps } from './'

const meta: Meta<typeof AddDeck> = {
  title: 'Decks/AddDeck',
  component: AddDeck,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const CreateDeckWithHooks = (args: AddDeckProps) => {
  return (
    <>
      <AddDeck onSubmit={args.onSubmit} />
    </>
  )
}

export const Default: Story = {}

export const Controlled: Story = {
  args: {
    onSubmit: (data: AddDeckFormValues) => {
      action('Add new Pack')(data)
    },
  },
  render: args => <CreateDeckWithHooks {...args} />,
}
