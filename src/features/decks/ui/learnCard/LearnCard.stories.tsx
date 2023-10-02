import type { Meta, StoryObj } from '@storybook/react'

import { LearnCard } from './'

const meta: Meta<typeof LearnCard> = {
  title: 'Decks/LearnCard',
  component: LearnCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    deck: {
      id: '1',
      name: 'JavaScript',
    },
    card: {
      id: '1',
      question: 'How "This" works in JavaScript?',
      answer: 'This is how "This" works in JavaScript',
      shots: 10,
    },
  },
}
