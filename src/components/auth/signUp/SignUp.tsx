import { DevTool } from '@hookform/devtools'

import s from './SignUp.module.scss'
import { SignUpFormValues, UseSignUp } from './UseSignUp'

import { TypographyVariant } from '@/common'
import { Button, Card, ControlledInput, Typography } from '@/components'

export const SignUp = () => {
  const { control, handleSubmit } = UseSignUp()

  const onSubmit = (data: SignUpFormValues) => {
    console.log(data)
  }

  return (
    <Card className={s.formWrapper}>
      <Typography className={s.formHeader} variant={TypographyVariant.Large} as="h2">
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
      <Typography className={s.signUpLink} variant={TypographyVariant.Link1} as="a">
        Sign In
      </Typography>
    </Card>
  )
}
