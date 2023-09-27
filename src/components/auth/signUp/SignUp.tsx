import s from './SignUp.module.scss'
import { FormValues, UseSignUp } from './UseSignUp'

import { TypographyVariant } from '@/common'
import { Button, Card, Input, Typography } from '@/components'

export const SignUp = () => {
  const { register, handleSubmit } = UseSignUp()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Card className={s.formWrapper}>
      <Typography className={s.formHeader} variant={TypographyVariant.Large} as="h2">
        Sign Up
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('email')} label="Email" />
        <Input
          {...register('password')}
          className={s.inputPasswordWrapper}
          type="password"
          label="Password"
        />
        <Input
          {...register('confirmPassword')}
          className={s.inputConfirmPasswordWrapper}
          type="password"
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
