import { Meta, StoryObj } from '@storybook/react'

import { Dropdown, DropdownItem } from '@common/components'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <DropdownItem onSelect={() => {}}>Learn</DropdownItem>
        <DropdownItem onSelect={() => {}}>Edit</DropdownItem>
        <DropdownItem onSelect={() => {}}>Delete</DropdownItem>
      </>
    ),
  },
}
