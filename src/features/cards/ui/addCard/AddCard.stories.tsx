import { Meta, StoryObj } from '@storybook/react'

import { AddCard } from './AddCard'

import { Button, OptionType } from '@/components'

const meta: Meta<typeof AddCard> = {
  title: 'Cards/AddCard',
  component: AddCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const initialState: OptionType[] = [
  { value: 'text', title: 'Text' },
  { value: 'picture', title: 'Picture' },
]

export const Default: Story = {
  args: {
    trigger: <Button>Add New Card</Button>,
    options: initialState,
    card: {
      question: `"How "This" works in JavaScript?`,
      answer: `This is how "This" works in JavaScript`,
      questionImg: 'https://placehold.co/490x120',
      answerImg: 'https://placehold.co/490x120',
    },
  },
}
