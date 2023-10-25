import { Meta, StoryObj } from '@storybook/react'

import { LinearProgressBar } from './LinearProgressBar'

const meta: Meta<typeof LinearProgressBar> = {
  title: 'Components/LinearProgressBar',
  component: LinearProgressBar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
