import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Tabs, TabsProps } from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const initialTabsState = [
  { title: 'Switcher_1', value: '1', disabled: false },
  { title: 'Switcher_2', value: '2', disabled: false },
  { title: 'Switcher_3', value: '3', disabled: false },
  { title: 'Switcher_4', value: '4', disabled: false },
  { title: 'Switcher_5', value: '5', disabled: true },
]

const TabsWithHooks = (args: TabsProps) => {
  const [activeTab, setActiveTab] = useState(args.value)

  const changeActiveTab = (tabValue: string) => {
    setActiveTab(tabValue)
  }

  return <Tabs value={activeTab} onValueChange={changeActiveTab} tabs={args.tabs} />
}

export const Default: Story = {
  args: {
    value: '1',
    tabs: initialTabsState,
  },
}

export const Controlled: Story = {
  args: {
    value: '1',
    tabs: initialTabsState,
  },
  render: args => <TabsWithHooks {...args} />,
}
