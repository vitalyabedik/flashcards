import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { Page } from './Page'

import { SignInForm } from '@/features'

const meta: Meta<typeof Page> = {
  title: 'Components/Page',
  component: Page,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <SignInForm onSubmit={data => action('SignIn data')(data)} />,
  },
}
