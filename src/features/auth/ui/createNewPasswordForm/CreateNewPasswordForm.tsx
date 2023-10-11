import s from './CreateNewPasswordForm.module.scss'
import { useCreatePasswordForm, CreatePasswordFormValue } from './useCreatePasswordForm'

import { TypographyVariant } from '@/common'
import { Button, Card, ControlledInput, Typography } from '@/components'

type Props = {
  onSubmit: (data: CreatePasswordFormValue) => void
}

export const CreateNewPasswordForm = ({ onSubmit }: Props): JSX.Element => {
  const { control, handleSubmit } = useCreatePasswordForm()

  return (
    <Card className={s.formWrapper}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography className={s.formHeader} as="h2" variant={TypographyVariant.Large}>
          Create new password
        </Typography>
        <ControlledInput
          className={s.input}
          name="password"
          type="password"
          placeholder="Password"
          control={control}
          label="Password"
        />
        <Typography className={s.instructionText} variant={TypographyVariant.Body2}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button type="submit" fullWidth>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
