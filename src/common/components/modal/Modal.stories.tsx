import { CSSProperties, useEffect, useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Button, Modal, ModalProps, Typography } from '@common/components'
import { TypographyVariant } from '@common/enums'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

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
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      <Modal open={isOpen} setOpen={setIsOpen} title={args.title}>
        <div>
          <div style={textWrapper}>
            <Typography variant={TypographyVariant.Body1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa
            </Typography>
          </div>
          <div style={actionBlock}>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Close
            </Button>
            <Button onClick={() => setIsOpen(false)}>Action</Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export const ModalWithTextExample: Story = {
  args: {
    title: 'Modal title',
    open: false,
    setOpen: () => {},
  },
  render: (args: ModalProps) => <ModalWithText {...args} />,
}
