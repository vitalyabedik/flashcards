import { JSX } from 'react'

import s from './CheckEmail.module.scss'

import { Email } from '@/assets'
import { TypographyVariant } from '@/common'
import { Button, Card, Typography } from '@/components'

type CheckEmailProps = {
  email: string
}

export const CheckEmail = ({ email = 'example@mail.com' }: CheckEmailProps): JSX.Element => {
  return (
    <Card className={s.formWrapper}>
      <Typography className={s.formHeader} variant={TypographyVariant.Large} as="h2">
        Check Email
      </Typography>
      <Email />
      <Typography className={s.instructionText} as="p" variant={TypographyVariant.Body2}>
        `We’ve sent an Email with instructions to ${email}`
      </Typography>
      <Button className={s.signInLink} as="a" href="https://google.com" fullWidth>
        Back to Sign In
      </Button>
    </Card>
  )
}
