import { useController, useForm } from 'react-hook-form'

import s from './SignIn.module.scss'

import { TypographyVariant } from '@/common'
import { Button, Card, Checkbox, Input, Typography } from '@/components'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const SignIn = () => {
  const { register, control, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    field: { value, onChange },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })

  return (
    <Card className={s.formWrapper}>
      <Typography variant={TypographyVariant.Large} as="h2">
        Sign In
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('email')} className={s.inputEmailWrapper} label="Email" />
        <Input
          {...register('password')}
          className={s.inputPasswordWrapper}
          type="password"
          label="Password"
        />
        <Checkbox
          checked={value}
          onCheckedChange={onChange}
          label="Remember me"
          name="rememberMe"
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
