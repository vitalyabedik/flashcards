import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './Tabs.tsx'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

const initialTabsState = [
  { title: 'Switcher_1', value: '1', disabled: false },
  { title: 'Switcher_2', value: '2', disabled: false },
  { title: 'Switcher_3', value: '3', disabled: false },
  { title: 'Switcher_4', value: '4', disabled: false },
  { title: 'Switcher_5', value: '5', disabled: true },
]

export const DefaultTabs: Story = {
  args: {
    value: '1',
    tabs: initialTabsState,
  },
}

export const TabsWithActions: Story = {
  args: {
    value: '1',
    tabs: initialTabsState,
  },
  render: ({ value, tabs }) => {
    const [activeTab, setActiveTab] = useState(value)
    const onChangeActiveTab = (value: string) => {
      setActiveTab(value)
    }

    return <Tabs value={activeTab} tabs={tabs} onChangeActiveTab={onChangeActiveTab} />
  },
}
