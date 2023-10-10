import type { Meta, StoryObj } from '@storybook/react'

import { IconButton } from './IconButton'

import { EditIcon, LogoutIcon, MoreIcon } from '@/assets'

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const More: Story = {
  args: {
    icon: <MoreIcon />,
  },
}

export const Edit: Story = {
  args: {
    icon: <EditIcon />,
    size: 1.6,
  },
}

export const Logout: Story = {
  args: {
    icon: <LogoutIcon />,
    size: 1.6,
  },
}
