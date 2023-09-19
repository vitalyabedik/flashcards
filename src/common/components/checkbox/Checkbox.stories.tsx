import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './Checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
  },
  render: args => <Checkbox {...args} />,
}

export const CheckboxWithLabel: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Click here',
  },
  render: args => <Checkbox {...args} />,
}

export const CheckboxWithActions: Story = {
  args: {
    disabled: false,
    label: 'Click here',
  },
  render: args => {
    const [checked, setChecked] = useState(false)
    const onChangeChecked = () => setChecked(!checked)

    return <Checkbox {...args} checked={checked} onChange={onChangeChecked} />
  },
}
