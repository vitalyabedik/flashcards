import type { Meta, StoryObj } from '@storybook/react'

import s from './Default.module.scss'
import { DefaultClassNameType, OptionType, Select } from './Select'

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

const defaultClassNames: DefaultClassNameType = {
  container: s.default,
  selectItemPaddings: s.selectItemPaddings,
}

export const Default: Story = {
  args: {
    options: initialState,
    disabled: false,
    fullWidth: false,
    defaultClassNames,
  },
}

export const FullWidth: Story = {
  args: {
    options: initialState,
    disabled: false,
    fullWidth: true,
    defaultClassNames,
  },
}

export const WithLabel: Story = {
  args: {
    options: initialState,
    label: 'Select label',
    disabled: false,
    fullWidth: false,
    defaultClassNames,
  },
}
