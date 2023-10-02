import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

import { LogoutIcon } from '@/assets'
import { ButtonVariant } from '@/common'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'link'],
      control: { type: 'radio' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
  },
}

export const Secondary: Story = {
  args: {
    variant: ButtonVariant.Secondary,
    children: 'Secondary Button',
    disabled: false,
  },
}

export const Tertiary: Story = {
  args: {
    variant: ButtonVariant.Tertiary,
    children: 'Tertiary Button',
    disabled: false,
  },
}

export const Link: Story = {
  args: {
    variant: ButtonVariant.Link,
    children: 'Tertiary Button',
    disabled: false,
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
  },
}

export const AsLink: Story = {
  args: {
    children: 'Link that looks like a button',
    as: 'a',
  },
}

export const PrimaryWithIcon: Story = {
  args: {
    children: (
      <>
        <LogoutIcon size={1.6} />
        Primary Button
      </>
    ),
    disabled: false,
  },
}

export const SecondaryWithIcon: Story = {
  args: {
    variant: ButtonVariant.Secondary,
    children: (
      <>
        <LogoutIcon size={1.6} />
        Secondary Button
      </>
    ),
    disabled: false,
  },
}
