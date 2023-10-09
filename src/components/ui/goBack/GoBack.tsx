import { ElementRef, forwardRef } from 'react'

import { useNavigate } from 'react-router-dom'

import s from './GoBack.module.scss'

import { ArrowBackIcon } from '@/assets'
import { ButtonVariant, Route } from '@/common'
import { Button } from '@/components'

type Props = {
  to?: Route
  title: string
}

export const GoBack = forwardRef<ElementRef<typeof Button>, Props>(
  ({ to, title }, ref): JSX.Element => {
    const navigate = useNavigate()

    const onBack = () => {
      to ? navigate(to) : navigate(-1)
    }

    return (
      // @ts-expect-error TS2322
      <Button ref={ref} variant={ButtonVariant.Link} onClick={onBack} className={s.root}>
        <ArrowBackIcon size={1.6} />
        {title}
      </Button>
    )
  }
)
