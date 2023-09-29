import { useState } from 'react'

import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { Input, InputProps } from './Input'

import { SearchIcon } from '@/assets'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

const InputWithHooks = (args: InputProps) => {
  const {
    type,
    label,
    error,
    leftIcon,
    rightIcon,
    onChange,
    onLeftIconClickHandler,
    onRightIconClickHandler,
    onKeyDown,
    onEnter,
  } = args

  const [value, setValue] = useState(args.value)

  const onChangeValueHandler = (value: string) => {
    setValue(value)
  }

  return (
    <Input
      type={type}
      value={value}
      onChange={onChange}
      onChangeValue={onChangeValueHandler}
      placeholder={args.placeholder}
      label={label}
      error={error}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      onLeftIconClickHandler={onLeftIconClickHandler}
      onRightIconClickHandler={onRightIconClickHandler}
      onKeyDown={onKeyDown}
      onEnter={onEnter}
    />
  )
}

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Default placeholder',
    label: 'Default input',
  },
}

export const Error: Story = {
  args: {
    type: 'text',
    placeholder: 'Error placeholder',
    label: 'Error input',
    error: 'Error message',
  },
}

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Disabled Input',
    label: 'Disabled input',
    disabled: true,
  },
}

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search Input',
    label: 'Search input',
    leftIcon: <SearchIcon size={1.9} />,
  },
}

export const Controlled: Story = {
  args: {
    type: 'text',
    placeholder: 'Controlled Input',
    label: 'Controlled Input',
    onChange: event => {
      action('Input Value')(event.target.value)
    },
  },
  render: args => <InputWithHooks {...args} />,
}

export const ControlledWithPassword: Story = {
  args: {
    type: 'password',
    placeholder: 'Password Input',
    label: 'Password Input',
    onChange: event => {
      action('Password Value')(event.target.value)
    },
  },
  render: args => <InputWithHooks {...args} />,
}

export const ControlledWithSearch: Story = {
  args: {
    type: 'search',
    placeholder: 'Search Input',
    label: 'Search Input',
    leftIcon: <SearchIcon />, // SearchIcon
    onChange: event => {
      action('Search Value')(event.target.value)
    },
    onLeftIconClickHandler: action('Left Icon was Clicked'),
  },
  render: args => <InputWithHooks {...args} />,
}
