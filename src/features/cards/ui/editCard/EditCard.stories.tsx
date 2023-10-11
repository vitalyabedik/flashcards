import { Meta, StoryObj } from '@storybook/react'

import { EditCard } from './EditCard'

import { EditIcon } from '@/assets'
import { IconButton, OptionType } from '@/components'

const meta: Meta<typeof EditCard> = {
  title: 'Cards/EditCard',
  component: EditCard,
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
    trigger: <IconButton icon={<EditIcon />} size={1.6} />,
    options: initialState,
    card: {
      question: `"How "This" works in JavaScript?`,
      answer: `This is how "This" works in JavaScript`,
      questionImg: 'https://placehold.co/490x120',
      answerImg: 'https://placehold.co/490x120',
    },
  },
}
