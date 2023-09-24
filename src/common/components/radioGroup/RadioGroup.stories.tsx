import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const initialRadioGroupState = [
  { value: 'first', title: 'First Radio', id: 'r1', disabled: false },
  { value: 'second', title: 'Second Radio', id: 'r2', disabled: false },
  { value: 'third', title: 'Third Radio', id: 'r3', disabled: true },
  { value: 'fourth', title: 'Fourth Radio', id: 'r4', disabled: false },
]

export const RadioGroupExample: Story = {
  args: {
    value: initialRadioGroupState[0].value,
    options: initialRadioGroupState,
  },
}

const RadioGroupWithHooks = () => {
  const [activeRadio, setActiveRadio] = useState(initialRadioGroupState[0].value)

  const changeActiveRadioItem = (radioValue: string) => {
    setActiveRadio(radioValue)
  }

  return (
    <RadioGroup
      value={activeRadio}
      onValueChange={changeActiveRadioItem}
      options={initialRadioGroupState}
    />
  )
}

export const RadioGroupWithActions = () => <RadioGroupWithHooks />
