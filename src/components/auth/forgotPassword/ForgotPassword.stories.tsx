import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from './'

const meta: Meta<typeof ForgotPassword> = {
  title: 'Auth/ForgotPassword',
  component: ForgotPassword,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
