import type { Meta, StoryObj } from '@storybook/react'

import { CreateNewPassword } from './'

const meta = {
  title: 'Auth/CreateNewPassword',
  component: CreateNewPassword,
  tags: ['autodocs'],
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultCreateNewPasswordForm: Story = {}
