import { Meta, StoryObj } from '@storybook/react'

import { EditCardModal } from './EditCardModal.tsx'

import { EditIcon } from '@/assets'
import { IconButton, OptionType } from '@/components'

const meta: Meta<typeof EditCardModal> = {
  title: 'Cards/EditCardModal',
  component: EditCardModal,
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
    cardValues: {
      question: 'What is JS',
      answer: 'It is programming language',
      answerImg: null,
      questionImg: null,
    },
  },
}
