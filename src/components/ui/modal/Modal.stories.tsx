import { CSSProperties, useEffect, useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, Modal, ModalProps, Typography } from '@/components'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const ModalWithText = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(args.open)

  useEffect(() => {
    setIsOpen(args.open)
  }, [args.open])

  const textWrapper: CSSProperties = {
    padding: '18px 24px',
  }

  const actionBlock: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 24px 36px',
  }

  return (
    <>
      <Modal trigger={<Button>Open</Button>} open={isOpen} setOpen={setIsOpen} title={args.title}>
        <div style={textWrapper}>
          <Typography variant={TypographyVariant.Body1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa
          </Typography>
        </div>
        <div style={actionBlock}>
          <Button variant={ButtonVariant.Secondary} onClick={() => setIsOpen(false)}>
            Close
          </Button>
          <Button onClick={() => setIsOpen(false)}>Action</Button>
        </div>
      </Modal>
    </>
  )
}

export const ControlledWithText: Story = {
  args: {
    title: 'Modal title',
    open: false,
    setOpen: () => {},
  },
  render: (args: ModalProps) => <ModalWithText {...args} />,
}
