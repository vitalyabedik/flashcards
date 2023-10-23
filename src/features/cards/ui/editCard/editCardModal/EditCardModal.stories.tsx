import { Meta, StoryObj } from '@storybook/react'

import { EditCardModal } from './EditCardModal'

import { EditIcon } from '@/assets'
import { IconButton, OptionType } from '@/components'

const meta: Meta<typeof EditCardModal> = {
  title: 'Cards/EditCardModal',
  component: EditCardModal,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const options: OptionType[] = [
  { value: 'text', title: 'Text' },
  { value: 'picture', title: 'Picture' },
]

const card = {
  id: '1234sdafcsf',
  deckId: 'sdf3asd32',
  userId: 'user1',
  shots: 0,
  grade: 3,
  question: 'What is JS',
  answer: 'It is programming language',
  questionImg: null,
  answerImg: null,
  created: new Date().toDateString(),
  updated: new Date().toDateString(),
  questionVideo: 'no-video',
  answerVideo: 'no-video',
}

export const DefaultEditCardModal: Story = {
  args: {
    trigger: <IconButton size={1.6} icon={<EditIcon />} />,
    options,
    card,
  },
}
