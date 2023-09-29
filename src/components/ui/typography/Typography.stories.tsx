import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './Typography'

import { TypographyVariant } from '@/common'

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: Object.values(TypographyVariant),
      control: { type: 'select' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    variant: TypographyVariant.Large,
    children: 'Large text',
  },
}

export const H1: Story = {
  args: {
    variant: TypographyVariant.H1,
    children: 'H1 text',
  },
}

export const H2: Story = {
  args: {
    variant: TypographyVariant.H2,
    children: 'H2 text',
  },
}

export const H3: Story = {
  args: {
    variant: TypographyVariant.H3,
    children: 'H3 text',
  },
}

export const Body1: Story = {
  args: {
    variant: TypographyVariant.Body1,
    children: 'Body1 text',
  },
}

export const Body2: Story = {
  args: {
    variant: TypographyVariant.Body2,
    children: 'Body2 text',
  },
}

export const Subtitle1: Story = {
  args: {
    variant: TypographyVariant.Subtitle1,
    children: 'Subtitle1 text',
  },
}

export const Subtitle2: Story = {
  args: {
    variant: TypographyVariant.Subtitle2,
    children: 'Subtitle2 text',
  },
}

export const Caption: Story = {
  args: {
    variant: TypographyVariant.Caption,
    children: 'Caption text',
  },
}

export const Overline: Story = {
  args: {
    variant: TypographyVariant.Overline,
    children: 'Overline text',
  },
}

export const Link1: Story = {
  args: {
    variant: TypographyVariant.Link1,
    children: 'Link1 text',
  },
}

export const Link2: Story = {
  args: {
    variant: TypographyVariant.Link2,
    children: 'Link2 text',
  },
}

export const Error: Story = {
  args: {
    variant: TypographyVariant.ERROR,
    children: 'Error!',
  },
}
