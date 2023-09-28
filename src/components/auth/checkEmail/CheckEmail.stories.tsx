import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from './'

const meta = {
  title: 'Auth/CheckEmail',
  component: CheckEmail,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultCheckEmail: Story = {
  args: {
    email: 'testEmail@gmail.com',
  },
}
