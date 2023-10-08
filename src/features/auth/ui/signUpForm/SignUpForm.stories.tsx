import { Meta, StoryObj } from '@storybook/react'

import { SignUpForm } from './SignUpForm'

const meta: Meta<typeof SignUpForm> = {
  title: 'Auth/SignUpForm',
  component: SignUpForm,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
