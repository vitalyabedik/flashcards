import { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from './SignInForm'

const meta: Meta<typeof SignInForm> = {
  title: 'Auth/SignInForm',
  component: SignInForm,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
