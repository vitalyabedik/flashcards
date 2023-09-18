import { Meta, StoryObj } from '@storybook/react'

import { PlayCircle, Edit, Delete } from '@/assets'
import { Dropdown, DropdownItemWithIcon } from '@common/components'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <DropdownItemWithIcon icon={<PlayCircle />} text="Learn" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<Edit />} text="Edit" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<Delete />} text="Delete" onSelect={() => {}} />
      </>
    ),
  },
}
