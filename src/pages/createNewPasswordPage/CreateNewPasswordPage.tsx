import { useParams } from 'react-router-dom'

import { Page } from '@/components'
import { CreateNewPasswordForm, useResetPasswordMutation } from '@/features'

export const CreateNewPasswordPage = (): JSX.Element => {
  const { token } = useParams<{ token: string }>()
  const [resetPassword] = useResetPasswordMutation()

  const resetPasswordHandler = (data: { password: string }) => {
    if (token) {
      resetPassword({ ...data, token })
    }
  }

  return (
    <Page>
      <CreateNewPasswordForm onSubmit={resetPasswordHandler} />
    </Page>
  )
}
