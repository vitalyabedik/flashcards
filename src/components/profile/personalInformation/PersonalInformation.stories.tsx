import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation } from './'

const meta: Meta<typeof PersonalInformation> = {
  title: 'Auth/PersonalInformation',
  component: PersonalInformation,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    avatar: '',
    name: 'John Doe',
    email: 'K9Mjv@example.com',
  },
}
