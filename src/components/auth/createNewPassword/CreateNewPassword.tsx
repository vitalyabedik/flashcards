import s from './CreateNewPassword.module.scss'

import { TypographyVariant } from '@/common'
import { Button, Card, ControlledInput, Typography } from '@/components'

export const CreateNewPassword = () => {
  return (
    <Card className={s.formWrapper}>
      <form className={s.form}>
        <Typography className={s.formHeader} as="h2" variant={TypographyVariant.Large}>
          Create new password
        </Typography>
        <ControlledInput
          className={s.input}
          name="email"
          type="password"
          placeholder="Email"
          /*control={control}*/
          label="Email"
        />
        <Typography className={s.instructionText} variant={TypographyVariant.Body2}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button className={s.button} type="submit" variant="primary" fullWidth>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
