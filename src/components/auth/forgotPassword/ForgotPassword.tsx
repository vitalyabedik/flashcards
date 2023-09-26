import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledInput } from '../../controlled'

import s from './ForgotPassword.module.scss'

import { TypographyVariant } from '@/common'
import { Button, Card, Typography } from '@/components'

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Incorrect email' }),
})

type FormValue = z.infer<typeof forgotPasswordSchema>

export const ForgotPassword = () => {
  const { control, handleSubmit } = useForm<FormValue>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  })

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
          name={'email'}
          placeholder={'Email'}
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
        <Button className={s.loginLink} as="a" variant="link" type="submit">
          Try logging in
        </Button>
      </form>
    </Card>
  )
}
