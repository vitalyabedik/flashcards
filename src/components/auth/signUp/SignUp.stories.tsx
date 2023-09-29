import { Meta, StoryObj } from '@storybook/react'

import { SignUp } from './SignUp'

const meta: Meta<typeof SignUp> = {
  title: 'Auth/SignUp',
  component: SignUp,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
