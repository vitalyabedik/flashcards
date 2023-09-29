import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup, RadioGroupProps } from './RadioGroup'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const initialState = [
  { value: 'first', title: 'First Radio', id: 'r1', disabled: false },
  { value: 'second', title: 'Second Radio', id: 'r2', disabled: false },
  { value: 'third', title: 'Third Radio', id: 'r3', disabled: true },
  { value: 'fourth', title: 'Fourth Radio', id: 'r4', disabled: false },
]

const RadioGroupWithHooks = (args: RadioGroupProps) => {
  const [activeRadio, setActiveRadio] = useState(args.value)

  const changeActiveRadioItem = (radioValue: string) => {
    setActiveRadio(radioValue)
  }

  return (
    <RadioGroup value={activeRadio} onValueChange={changeActiveRadioItem} options={args.options} />
  )
}

export const Default: Story = {
  args: {
    value: initialState[0].value,
    options: initialState,
  },
}

export const Controlled: Story = {
  args: {
    value: initialState[0].value,
    options: initialState,
  },
  render: args => <RadioGroupWithHooks {...args} />,
}
