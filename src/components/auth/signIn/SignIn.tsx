import { DevTool } from '@hookform/devtools'

import s from './SignIn.module.scss'
import { SignInFormValues, useSignIn } from './useSignIn'

import { TypographyVariant } from '@/common'
import { Button, Card, ControlledCheckbox, ControlledInput, Typography } from '@/components'

type Props = {
  onSubmit: (data: SignInFormValues) => void
}

export const SignIn = ({ onSubmit }: Props): JSX.Element => {
  const { control, handleSubmit } = useSignIn()

  return (
    <Card className={s.formWrapper}>
      <Typography className={s.formHeader} variant={TypographyVariant.Large} as="h1">
        Sign In
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
        <ControlledCheckbox
          control={control}
          name="rememberMe"
          label="Remember me"
          position="left"
        />
        <Typography className={s.forgotPasswordLink} variant={TypographyVariant.Body2} as="a">
          Forgot Password?
        </Typography>
        <Button type="submit" fullWidth>
          Sign In
        </Button>
      </form>
      <Typography className={s.infoText} variant={TypographyVariant.Body2}>
        {`Don't have an account?`}
      </Typography>
      <Typography className={s.signUpLink} variant={TypographyVariant.Link1} as="a">
        Sign Up
      </Typography>
    </Card>
  )
}
