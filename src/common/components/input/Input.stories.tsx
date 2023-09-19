import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

import { Clear, Search } from '@/assets'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultWithError: Story = {
  args: {
    type: 'text',
    placeholder: 'Error Input',
    label: 'Error input',
    error: 'Error message',
  },
}

export const DefaultWithDisableState: Story = {
  args: {
    type: 'text',
    placeholder: 'Disabled Input',
    label: 'Disabled input',
    disabled: true,
  },
}

export const DefaultWithSearch: Story = {
  args: {
    type: 'search',
    placeholder: 'Search Input',
    label: 'Search input',
    value: '',
    leftIcon: <Search />,
  },
}

export const DefaultWithDisabledSearch: Story = {
  args: {
    type: 'text',
    placeholder: 'Search Input',
    label: 'Search input',
    leftIcon: <Search />,
    disabled: true,
  },
}

const PasswordInput = () => {
  const [value, setValue] = useState('')
  const onChangeValue = (value: string) => {
    setValue(value)
  }

  return (
    <Input
      type="password"
      value={value}
      onChangeValue={onChangeValue}
      placeholder="Password input"
      label="Password input"
    />
  )
}

export const PasswordInputWithAction = () => <PasswordInput />

const DefaultInput = () => {
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

export const DefaultInputWithAction = () => <DefaultInput />

const SearchInput = () => {
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

export const SearchInputWithAction = () => <SearchInput />

const ClearInput = () => {
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

export const ClearInputWithAction = () => <ClearInput />
