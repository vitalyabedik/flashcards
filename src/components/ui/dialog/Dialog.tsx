import { ReactNode, useState } from 'react'

import s from './Dialog.module.scss'

import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, Modal, Typography } from '@/components'
type ActionDialog = 'removeDeck' | 'removeCard'

type DialogProps = {
  trigger: ReactNode
  modalHeaderTitle: string
  itemName: string
  action: ActionDialog
  buttonTitle: string
  onClick: () => void
}

export const Dialog = ({
  trigger,
  modalHeaderTitle,
  action,
  itemName,
  buttonTitle,
  onClick,
}: DialogProps) => {
  const [open, setOpen] = useState(false)

  const onClose = () => {
    setOpen(false)
  }

  const onButtonClickHandler = () => {
    onClick()
    setOpen(false)
  }

  return (
    <Modal trigger={trigger} open={open} setOpen={setOpen} title={modalHeaderTitle}>
      <div className={s.root}>
        <Typography className={s.text} variant={TypographyVariant.Body1}>
          {getDialogText(action, itemName)}
        </Typography>
        <div className={s.buttonContainer}>
          <Button type="button" variant={ButtonVariant.Secondary} onClick={onClose}>
            <Typography variant={TypographyVariant.Subtitle2} as="span">
              Cancel
            </Typography>
          </Button>
          <Button onClick={onButtonClickHandler}>
            <Typography variant={TypographyVariant.Subtitle2} as="span">
              {buttonTitle}
            </Typography>
          </Button>
        </div>
      </div>
    </Modal>
  )
}

const getDialogText = (action: ActionDialog, itemName?: string) => {
  const dialogVariants: {
    [key in ActionDialog]: ReactNode
  } = {
    removeDeck: (
      <>
        Do you really want to remove <b>{itemName}?</b> <br></br> All cards will be deleted.
      </>
    ),
    removeCard: (
      <>
        Do you really want to remove <b>{itemName}?</b> <br></br>Card will be deleted.
      </>
    ),
  }

  return dialogVariants[action]
}
