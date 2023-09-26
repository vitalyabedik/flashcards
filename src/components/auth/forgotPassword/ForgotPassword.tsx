import { useForm } from 'react-hook-form'

import { TypographyVariant } from '@/common'
import { Button, Input, Typography } from '@/components'

export const ForgotPassword = () => {
  const {} = useForm()

  return (
    <form>
      <Input />
      <Typography as="p" variant={TypographyVariant.Body2}>
        Enter your email address and we will send you further instructions
      </Typography>
      <Button variant="primary" fullWidth>
        Send Instructions
      </Button>
      <Typography as="p" variant={TypographyVariant.Body2}>
        Did you remember your password?
      </Typography>
      <Button as="a" variant="link">
        Try logging in
      </Button>
    </form>
  )
}
