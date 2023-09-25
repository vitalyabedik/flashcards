import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

import { Clear, Search } from '@/assets'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputWithValue: Story = {
  args: {
    type: 'text',
    value: 'Test value',
    placeholder: 'Input with value',
    label: 'Input with value',
  },
}

export const ErrorInput: Story = {
  args: {
    type: 'text',
    placeholder: 'Error Input',
    label: 'Error input',
    error: 'Error message',
  },
}

export const DisabledInput: Story = {
  args: {
    type: 'text',
    placeholder: 'Disabled Input',
    label: 'Disabled input',
    disabled: true,
  },
}

export const SearchInput: Story = {
  args: {
    type: 'search',
    placeholder: 'Search Input',
    label: 'Search input',
    value: '',
    leftIcon: <Search size={1.9} />,
  },
}

const DefaultInputExample = () => {
  const [value, setValue] = useState('')
  const onChangeValue = (value: string) => {
    setValue(value)
  }

  return (
    <Input
      value={value}
      onChangeValue={onChangeValue}
      placeholder="Default input"
      label="Default input"
    />
  )
}

export const DefaultInputWithAction = () => <DefaultInputExample />

const PasswordInputExample = () => {
  const [value, setValue] = useState('')
  const onChangeValue = (value: string) => {
    setValue(value)
  }

  const onKeyPress = () => {
    alert(`Send data from input: ${value}`)
  }

  return (
    <Input
      type="password"
      value={value}
      onChangeValue={onChangeValue}
      placeholder="Password input"
      label="Password input"
      onEnter={onKeyPress}
    />
  )
}

export const PasswordInputWithAction = () => <PasswordInputExample />

const SearchInputExample = () => {
  const [value, setValue] = useState('')
  const onChangeValue = (value: string) => {
    setValue(value)
  }
  const onLeftIconClickHandler = () => {
    alert(value)
  }

  return (
    <Input
      type="search"
      value={value}
      onChangeValue={onChangeValue}
      placeholder="Search input"
      label="Search input"
      leftIcon={<Search />}
      onLeftIconClickHandler={onLeftIconClickHandler}
    />
  )
}

export const SearchInputWithAction = () => <SearchInputExample />

const ClearInputExample = () => {
  const [value, setValue] = useState('')
  const onChangeValue = (value: string) => {
    setValue(value)
  }
  const onRightIconClickHandler = () => {
    setValue('')
  }

  return (
    <Input
      type="text"
      value={value}
      onChangeValue={onChangeValue}
      placeholder="Input with clear icon"
      label="Input with clear icon"
      rightIcon={<Clear />}
      onRightIconClickHandler={onRightIconClickHandler}
    />
  )
}

export const ClearInputWithAction = () => <ClearInputExample />
