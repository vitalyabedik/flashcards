import { useState } from 'react'

import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { Panel, PanelProps } from './Panel'

const meta: Meta<typeof Panel> = {
  title: 'Components/Panel',
  component: Panel,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const PanelWithHook = (args: PanelProps) => {
  const [inputValue, setValue] = useState(args.inputValue)
  const [tabValue, setTabValue] = useState(args.tabValue)
  const [sliderValue, setSliderValue] = useState(args.sliderValue)

  const onClearFilter = () => {
    setValue('')
    setTabValue(args.tabValue)
    setSliderValue(args.sliderValue)
  }
  const queryString = `https://www.example/${tabValue}?minCardsCount=${
    sliderValue[0]
  }&maxCardsCount=${sliderValue[1]}${inputValue && `&cardTitle=${inputValue}`}`

  action(`Url: ${queryString}`)()

  return (
    <Panel
      inputValue={inputValue}
      onChangeInputValue={setValue}
      tabValue={tabValue}
      tabLabel={args.tabLabel}
      onChangeTabValue={setTabValue}
      sliderValue={sliderValue}
      minSliderValue={args.minSliderValue}
      maxSliderValue={args.maxSliderValue}
      sliderLabel={args.sliderLabel}
      onChangeSliderValue={setSliderValue}
      onClearFilter={onClearFilter}
    />
  )
}

export const Default: Story = {
  args: {
    inputValue: '',
    tabValue: 'allCards',
    tabLabel: 'Show packs cards',
    sliderValue: [5, 15],
    minSliderValue: 1,
    maxSliderValue: 20,
    sliderLabel: 'Number of cards',
  },
}

export const ControlledPanel: Story = {
  args: {
    inputValue: '',
    tabValue: 'allCards',
    tabLabel: 'Show packs cards',
    sliderValue: [1, 20],
    minSliderValue: 1,
    maxSliderValue: 20,
    sliderLabel: 'Number of cards',
  },
  render: args => <PanelWithHook {...args} />,
}
