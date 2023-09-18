import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Slider, SliderProps } from '@common/components'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

const SliderWithHooks = (args: SliderProps) => {
  const [value, setValue] = useState(args.value)

  const handleOnValueChange = (value: number[]) => {
    setValue(value)
  }

  return <Slider {...args} value={value} onValueChange={handleOnValueChange} />
}

export const Default: Story = {
  args: {
    value: [0, 10],
    min: 0,
    max: 10,
    step: 1,
  },
  render: args => <SliderWithHooks {...args} />,
}
