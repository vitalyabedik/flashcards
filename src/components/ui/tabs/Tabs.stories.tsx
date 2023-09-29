import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Tabs, TabsProps } from './Tabs'

import { TabItem } from '@components/ui/tabs/tabItem'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const TabsWithHooks = (args: TabsProps) => {
  const [activeTab, setActiveTab] = useState(args.value)

  const changeActiveTab = (tabValue: string) => {
    setActiveTab(tabValue)
  }

  return (
    <Tabs value={activeTab} onValueChange={changeActiveTab}>
      {args.children}
    </Tabs>
  )
}

export const Default: Story = {
  args: {
    value: '1',
    children: (
      <>
        <TabItem value={'1'}>{'Switcher_1'}</TabItem>
        <TabItem value={'2'}>{'Switcher_2'}</TabItem>
        <TabItem value={'3'} disabled>
          {'Switcher_3'}
        </TabItem>
        <TabItem value={'4'}>{'Switcher_4'}</TabItem>
        <TabItem value={'5'}>{'Switcher_5'}</TabItem>
      </>
    ),
  },
}

export const Controlled: Story = {
  args: {
    value: '1',
    children: (
      <>
        <TabItem value={'1'}>{'Switcher_1'}</TabItem>
        <TabItem value={'2'}>{'Switcher_2'}</TabItem>
        <TabItem value={'3'} disabled>
          {'Switcher_3'}
        </TabItem>
        <TabItem value={'4'}>{'Switcher_4'}</TabItem>
        <TabItem value={'5'}>{'Switcher_5'}</TabItem>
      </>
    ),
  },
  render: ({ children, ...restArgs }) => <TabsWithHooks {...restArgs}>{children}</TabsWithHooks>,
}
