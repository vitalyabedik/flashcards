import type { Meta, StoryObj } from '@storybook/react'

import { CreateNewPassword } from './CreateNewPassword'

const meta: Meta<typeof CreateNewPassword> = {
  title: 'Auth/CreateNewPassword',
  component: CreateNewPassword,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
