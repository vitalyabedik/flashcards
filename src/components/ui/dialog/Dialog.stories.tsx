import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

import { Dialog } from './Dialog'

import { DeleteIcon } from '@/assets'
import { ButtonVariant } from '@/common'
import { Button } from '@/components'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultDeletePack: Story = {
  args: {
    trigger: (
      <Button variant={ButtonVariant.Secondary}>
        <DeleteIcon size={1.6} /> Delete Pack
      </Button>
    ),
    modalHeaderTitle: 'Delete Pack',
    itemName: 'First Pack',
    action: 'removeDeck',
    buttonTitle: 'Delete Pack',
    onClick: action('Clicked for Delete Pack button'),
  },
}

export const DefaultDeleteCard: Story = {
  args: {
    trigger: (
      <Button variant={ButtonVariant.Secondary}>
        <DeleteIcon size={1.6} /> Delete Card
      </Button>
    ),
    modalHeaderTitle: 'Delete Card',
    itemName: 'First Card',
    action: 'removeCard',
    buttonTitle: 'Delete Card',
    onClick: action('Clicked for Delete Card button'),
  },
}
