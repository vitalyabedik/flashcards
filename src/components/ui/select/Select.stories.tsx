import type { Meta, StoryObj } from '@storybook/react'

import { OptionType, Select } from './Select'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const initialState: OptionType[] = [
  { value: 'first', title: 'First Select' },
  { value: 'second', title: 'Second Select' },
  { value: 'third', title: 'Third Select' },
  { value: 'fourth', title: 'Fourth Select' },
]

export const Default: Story = {
  args: {
    options: initialState,
    disabled: false,
    fullWidth: false,
  },
}

export const FullWidth: Story = {
  args: {
    options: initialState,
    disabled: false,
    fullWidth: true,
  },
}

export const WithLabel: Story = {
  args: {
    options: initialState,
    label: 'Select label',
    disabled: false,
    fullWidth: false,
  },
}

const initialStatePagination: OptionType[] = [
  { value: 'ten', title: '10' },
  { value: 'twenty', title: '20' },
  { value: 'thirty', title: '30' },
  { value: 'forty', title: '50' },
  { value: 'one hundred', title: '100' },
]

export const Pagination: Story = {
  args: {
    options: initialStatePagination,
    placeholder: initialStatePagination[4].title,
    disabled: false,
    variant: 'pagination',
  },
}
