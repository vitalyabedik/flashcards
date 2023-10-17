import { Meta } from '@storybook/react'
import { toast } from 'react-toastify'

import { Toast } from './Toast'

import { Button } from '@/components'

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
}

export default meta

export const Default = () => {
  const showToastDefault = () => {
    toast('Default message')
  }

  return (
    <>
      <Button onClick={showToastDefault}>Show Default Toast</Button>
      <Toast />
    </>
  )
}

export const Info = () => {
  const showToastInfo = () => {
    toast.info('Info message')
  }

  return (
    <>
      <Button onClick={showToastInfo}>Show Info Toast</Button>
      <Toast />
    </>
  )
}

export const Success = () => {
  const showToastSuccess = () => {
    toast.success('Success message')
  }

  return (
    <>
      <Button onClick={showToastSuccess}>Show Success Toast</Button>
      <Toast />
    </>
  )
}

export const Warning = () => {
  const showToastWarning = () => {
    toast.warning('Warning message')
  }

  return (
    <>
      <Button onClick={showToastWarning}>Show Warning Toast</Button>
      <Toast />
    </>
  )
}

export const Error = () => {
  const showToastError = () => {
    toast.error('Error message')
  }

  return (
    <>
      <Button onClick={showToastError}>Show Error Toast</Button>
      <Toast />
    </>
  )
}
