import type { Meta, StoryObj } from '@storybook/react'

import { GoBack } from './GoBack'

const meta: Meta<typeof GoBack> = {
  title: 'Components/GoBack',
  component: GoBack,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Back',
  },
}
