import { CSSProperties } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const contentStyles: CSSProperties = { textAlign: 'center', fontSize: '24px' }

export const Default: Story = {
  args: {
    children: <div style={contentStyles}>Card</div>,
    style: {
      width: '300px',
      height: '300px',
      padding: '24px',
    },
  },
}
