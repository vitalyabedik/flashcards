import type { Meta, StoryObj } from '@storybook/react'

import { CreateNewPasswordForm } from '@/features'

const meta: Meta<typeof CreateNewPasswordForm> = {
  title: 'Auth/CreateNewPasswordForm',
  component: CreateNewPasswordForm,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
