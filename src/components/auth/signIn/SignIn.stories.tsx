import { Meta, StoryObj } from '@storybook/react'

import { SignIn } from './SignIn'

const meta: Meta<typeof SignIn> = {
  title: 'Auth/SignIn',
  component: SignIn,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
