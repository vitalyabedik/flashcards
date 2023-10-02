import { useState } from 'react'

import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { AddDeck, AddDeckFormValues, AddDeckProps } from './'

import { Button } from '@/components'

const meta: Meta<typeof AddDeck> = {
  title: 'Decks/AddDeck',
  component: AddDeck,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const CreateDeckWithHooks = (args: AddDeckProps) => {
  const [open, setOpen] = useState(args.open)

  const onSubmitHandler = (data: AddDeckFormValues) => {
    action('Add new Pack')(data)
    setOpen(false)
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>Add Deck</Button>
      <AddDeck open={open} setOpen={setOpen} onSubmit={onSubmitHandler} />
    </>
  )
}

export const Default: Story = { args: { open: false } }

export const Controlled: Story = {
  args: { open: true, onSubmit: action('Add new Pack') },
  render: args => <CreateDeckWithHooks {...args} />,
}
