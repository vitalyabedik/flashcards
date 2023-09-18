import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

import { Search } from '@/assets'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Input',
    label: 'Default input',
    disabled: true,
  },
}

export const DefaultWithError: Story = {
  args: {
    type: 'text',
    placeholder: 'Error Input',
    label: 'Error input',
    error: 'Error message',
  },
}

export const DefaultWithDisableState: Story = {
  args: {
    type: 'text',
    placeholder: 'Disabled Input',
    label: 'Disabled input',
    disabled: true,
  },
}

export const DefaultWithSearch: Story = {
  args: {
    type: 'text',
    placeholder: 'Search Input',
    label: 'Search input',
    leftIcon: <Search />,
  },
}

export const DefaultWithDisabledSearch: Story = {
  args: {
    type: 'text',
    placeholder: 'Search Input',
    label: 'Search input',
    leftIcon: <Search />,
    disabled: true,
  },
}
