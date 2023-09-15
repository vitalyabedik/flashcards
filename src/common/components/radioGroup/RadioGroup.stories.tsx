import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './RadioGroup'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: { onValueChange: { action: 'clicked' } },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const initialRadioGroupState = [
  { value: 'first', labelTitle: 'First Radio', disabled: true },
  { value: 'second', labelTitle: 'Second Radio', disabled: false },
  { value: 'third', labelTitle: 'Third Radio', disabled: true },
  { value: 'fourth', labelTitle: 'Fourth Radio', disabled: false },
]

export const Default: Story = {
  args: {
    value: initialRadioGroupState[0].value,
    radioGroupItems: initialRadioGroupState,
  },
}

export const RadioGroupWithActions: Story = {
  args: Default.args,
  render: args => {
    const [radioGroupValue, setRadioGroupValue] = useState(args.value)
    const onChangeRadioGroup = (value: string) => {
      setRadioGroupValue(value)
    }

    return (
      <RadioGroup
        value={radioGroupValue}
        radioGroupItems={args.radioGroupItems}
        onValueChange={onChangeRadioGroup}
      />
    )
  },
}
