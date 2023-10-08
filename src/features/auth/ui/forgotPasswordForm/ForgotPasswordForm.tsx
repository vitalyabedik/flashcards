import { JSX } from 'react'

import { Link } from 'react-router-dom'

import s from './ForgotPasswordForm.module.scss'
import { useForgotPasswordForm, ForgotPasswordFormValue } from './useForgotPasswordForm'

import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, Card, ControlledInput, Typography } from '@/components'

type Props = {
  onSubmit: (data: ForgotPasswordFormValue) => void
}

export const ForgotPasswordForm = ({ onSubmit }: Props): JSX.Element => {
  const { control, handleSubmit } = useForgotPasswordForm()

  return (
    <Card className={s.formWrapper}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography className={s.formHeader} as="h2" variant={TypographyVariant.Large}>
          Forgot your password?
        </Typography>
        <ControlledInput
          className={s.input}
          name="email"
          placeholder="Email"
          control={control}
          label="Email"
        />
        <Typography className={s.instructionText} variant={TypographyVariant.Body2}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button className={s.button} type="submit" fullWidth>
          Send Instructions
        </Button>
        <Typography className={s.questionText} variant={TypographyVariant.Body2}>
          Did you remember your password?
        </Typography>
        <Button className={s.loginLink} as={Link} to="/sign-in" variant={ButtonVariant.Link}>
          Try logging in
        </Button>
      </form>
    </Card>
  )
}
