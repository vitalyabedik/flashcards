import s from './ForgotPassword.module.scss'
import { useForgotPassword, ForgotPasswordFormValue } from './useForgotPassword'

import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, Card, ControlledInput, Typography } from '@/components'

type Props = {
  onSubmit: (data: ForgotPasswordFormValue) => void
}

export const ForgotPassword = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForgotPassword()

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
        <Button
          className={s.loginLink}
          as="a"
          href="https://google.com"
          variant={ButtonVariant.Link}
        >
          Try logging in
        </Button>
      </form>
    </Card>
  )
}
