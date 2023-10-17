import { Meta, StoryObj } from '@storybook/react'

import { AddCardModal } from './AddCardModal'

import { Button, OptionType } from '@/components'

const meta: Meta<typeof AddCardModal> = {
  title: 'Cards/AddCardModal',
  component: AddCardModal,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const options: OptionType[] = [
  { value: 'text', title: 'Text' },
  { value: 'picture', title: 'Picture' },
]

export const Default: Story = {
  args: {
    trigger: <Button>Add New Card</Button>,
    options,
  },
}
