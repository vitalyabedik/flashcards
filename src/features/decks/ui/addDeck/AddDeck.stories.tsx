import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { AddDeck, AddDeckProps } from './'

const meta: Meta<typeof AddDeck> = {
  title: 'Decks/AddDeck',
  component: AddDeck,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const CreateDeckWithHooks = (args: AddDeckProps) => {
  const [open, setOpen] = useState(args.open)

  return <AddDeck open={open} setOpen={setOpen} />
}

export const Default: Story = { args: { open: true } }

export const Controlled: Story = {
  args: { open: true },
  render: args => <CreateDeckWithHooks {...args} />,
}
