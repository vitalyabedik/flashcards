import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox, CheckboxProps } from './Checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    position: {
      options: ['default', 'left'],
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    position: 'default',
  },
}

export const CheckboxWithLabel: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Click here',
    position: 'default',
  },
}

export const DefaultWithActions: Story = {
  args: {
    checked: false,
    disabled: false,
    position: 'default',
  },
  render: (args: CheckboxProps) => {
    const [checked, setChecked] = useState(false)
    const onCheckedChange = () => setChecked(!checked)

    return <Checkbox {...args} checked={checked} onCheckedChange={onCheckedChange} />
  },
}

export const CheckboxWithActions: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Click here',
    position: 'default',
  },
  render: (args: CheckboxProps) => {
    const [checked, setChecked] = useState(false)
    const onCheckedChange = () => setChecked(!checked)

    return <Checkbox {...args} checked={checked} onCheckedChange={onCheckedChange} />
  },
}
