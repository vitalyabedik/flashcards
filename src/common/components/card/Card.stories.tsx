import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '@common/components/card/Card.tsx'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <div style={{ textAlign: 'center', fontSize: '24px' }}>Card</div>,
    style: {
      width: '300px',
      height: '300px',
      padding: '24px',
    },
  },
}
