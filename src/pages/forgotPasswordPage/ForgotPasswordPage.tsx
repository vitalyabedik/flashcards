import { useState } from 'react'

import { Page } from '@/components'
import {
  CheckEmail,
  RecoverPasswordParamsType,
  ForgotPasswordForm,
  useRecoverPasswordMutation,
} from '@/features'

export const ForgotPasswordPage = (): JSX.Element => {
  const [recoverPassword, { isSuccess }] = useRecoverPasswordMutation()
  const [email, setEmail] = useState('')
  const recoveryPasswordHandler = (data: RecoverPasswordParamsType) => {
    recoverPassword(data)
    setEmail(data.email)
  }

  return (
    <Page>
      {!isSuccess && <ForgotPasswordForm onSubmit={recoveryPasswordHandler} />}
      {isSuccess && <CheckEmail email={email} />}
    </Page>
  )
}
