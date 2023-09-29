import { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    userName: String,
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    userName: 'John Doe',
  },
}

export const Large: Story = {
  args: {
    userName: 'John Doe',
    size: 'large',
  },
}

export const DefaultWithImage: Story = {
  args: {
    userName: 'John Doe',
    image: 'https://placehold.co/36',
  },
}

export const LargeWithImage: Story = {
  args: {
    userName: 'John Doe',
    size: 'large',
    image: 'https://placehold.co/96',
  },
}
