import { DevTool } from '@hookform/devtools'
import { Link } from 'react-router-dom'

import s from './SignUpForm.module.scss'
import { SignUpFormValues, useSignUpForm } from './useSignUpForm'

import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, Card, ControlledInput, Typography } from '@/components'

type Props = {
  onSubmit: (data: SignUpFormValues) => void
}

export const SignUpForm = ({ onSubmit }: Props): JSX.Element => {
  const { control, handleSubmit } = useSignUpForm()

  return (
    <Card className={s.formWrapper}>
      <Typography className={s.formHeader} variant={TypographyVariant.Large} as="h1">
        Sign Up
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <ControlledInput name="email" placeholder="Email" control={control} label="Email" />
        <ControlledInput
          className={s.inputPasswordWrapper}
          type="password"
          placeholder="Password"
          control={control}
          name="password"
          label="Password"
        />
        <ControlledInput
          className={s.inputConfirmPasswordWrapper}
          type="password"
          placeholder="Confirm Password"
          control={control}
          name="confirmPassword"
          label="Confirm Password"
        />
        <Button type="submit" fullWidth>
          Sign Up
        </Button>
      </form>
      <Typography className={s.infoText} variant={TypographyVariant.Body2}>
        Already have an account?
      </Typography>
      <Button className={s.signInLink} as={Link} to="/sign-in" variant={ButtonVariant.Link}>
        Sign In
      </Button>
    </Card>
  )
}
