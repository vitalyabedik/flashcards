import type { Meta, StoryObj } from '@storybook/react'

import s from './Default.module.scss'
import { DefaultClassNameType, OptionType, Select } from './Select'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const initialSelectState: OptionType[] = [
  { value: 'first', title: 'First Select' },
  { value: 'second', title: 'Second Select' },
  { value: 'third', title: 'Third Select' },
  { value: 'fourth', title: 'Fourth Select' },
]

const defaultClassNames: DefaultClassNameType = {
  container: s.default,
  selectItemPaddings: s.selectItemPaddings,
}

export const Default: Story = {
  args: {
    options: initialSelectState,
    disabled: false,
    fullWidth: false,
    defaultClassNames,
  },
}

export const SelectWithLabel: Story = {
  args: {
    options: initialSelectState,
    label: 'Select label',
    disabled: false,
    fullWidth: false,
    defaultClassNames,
  },
}
