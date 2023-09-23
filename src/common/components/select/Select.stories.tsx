import type { Meta, StoryObj } from '@storybook/react'

import s from './Default.module.scss'

import { Select, SelectItemOwnProps } from '@common/components'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const initialSelectState: SelectItemOwnProps[] = [
  { value: 'first', title: 'First Select' },
  { value: 'second', title: 'Second Select' },
  { value: 'third', title: 'Third Select' },
  { value: 'fourth', title: 'Fourth Select' },
]

const defaultClasses = {
  container: s.default,
  selectItemPaddings: s.selectItemPaddings,
}

export const Default: Story = {
  args: {
    options: initialSelectState,
    disabled: false,
    fullWidth: false,
    defaultClasses,
  },
  render: args => <Select {...args} />,
}

export const SelectWithLabel: Story = {
  args: {
    options: initialSelectState,
    label: 'Select label',
    disabled: false,
    fullWidth: false,
    defaultClasses,
  },
  render: args => <Select {...args} onValueChange={() => {}} />,
}
