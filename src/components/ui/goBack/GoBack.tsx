import { ElementRef, forwardRef } from 'react'

import cn from 'classnames'
import { useNavigate } from 'react-router-dom'

import s from './GoBack.module.scss'

import { ArrowBackIcon } from '@/assets'
import { ButtonVariant, Route } from '@/common'
import { Button } from '@/components'

type Props = {
  to?: Route
  title: string
  className?: string
}

export const GoBack = forwardRef<ElementRef<typeof Button>, Props>(
  ({ to, title, className }, ref): JSX.Element => {
    const navigate = useNavigate()

    const onBack = () => {
      to ? navigate(to) : navigate(-1)
    }

    const goBackClassName = cn(s.root, className)

    return (
      // @ts-expect-error TS2322
      <Button ref={ref} className={goBackClassName} variant={ButtonVariant.Link} onClick={onBack}>
        <ArrowBackIcon size={1.6} />
        {title}
      </Button>
    )
  }
)
