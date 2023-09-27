import s from './ForgotPassword.module.scss'
import { UseForgotPassword } from './UseForgotPassword'

import { TypographyVariant } from '@/common'
import { Button, Card, ControlledInput, Typography } from '@/components'

export const ForgotPassword = () => {
  const { control, handleSubmit } = UseForgotPassword()

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <Card className={s.formWrapper}>
      <form className={s.form} onSubmit={onSubmit}>
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
        <Typography className={s.instructionText} as="p" variant={TypographyVariant.Body2}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button className={s.button} variant="primary" fullWidth>
          Send Instructions
        </Button>
        <Typography className={s.questionText} as="p" variant={TypographyVariant.Body2}>
          Did you remember your password?
        </Typography>
        <Button
          className={s.loginLink}
          as="a"
          href="https://google.com"
          variant="link"
          type="submit"
        >
          Try logging in
        </Button>
      </form>
    </Card>
  )
}
