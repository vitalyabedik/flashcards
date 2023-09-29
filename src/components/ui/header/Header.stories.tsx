import { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const SingIn: Story = {
  args: {
    isLoggedIn: false,
  },
}

export const LoggedIn: Story = {
  args: {
    avatar: 'https://placehold.co/96',
    name: 'Ivan',
    email: 'j&johnson@gmail.com',
    isLoggedIn: true,
  },
}
