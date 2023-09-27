import { Meta, StoryObj } from '@storybook/react'

import { SignIn } from './SignIn'

const meta = {
  title: 'Auth/SignIn',
  component: SignIn,
  tags: ['autodocs'],
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSignInForm: Story = {}
