import { Meta, StoryObj } from '@storybook/react'

import { Header } from '@common/components'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderWithButton: Story = {
  args: {
    isLoggedIn: false,
  },
}

export const HeaderWithAvatar: Story = {
  args: {
    avatar: 'https://placehold.co/96',
    name: 'Ivan',
    email: 'j&johnson@gmail.com',
    isLoggedIn: true,
  },
}
