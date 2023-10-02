import { Meta, StoryObj } from '@storybook/react'

import { Dropdown } from './Dropdown'

import { PlayCircleIcon, EditIcon, DeleteIcon } from '@/assets'
import { DropdownItemWithIcon } from '@components/ui'

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    align: {
      options: ['start', 'center', 'end'],
      control: { type: 'select' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <DropdownItemWithIcon
          icon={<PlayCircleIcon size={1.6} />}
          text="Learn"
          onSelect={() => {}}
        />
        <DropdownItemWithIcon icon={<EditIcon size={1.6} />} text="Edit" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<DeleteIcon size={1.6} />} text="Delete" onSelect={() => {}} />
      </>
    ),
  },
}
