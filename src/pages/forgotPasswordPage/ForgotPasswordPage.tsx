import { useState } from 'react'

import { Page } from '@/components'
import {
  CheckEmail,
  ForgotParamsType,
  ForgotPasswordForm,
  useForgotPasswordMutation,
} from '@/features'

export const ForgotPasswordPage = (): JSX.Element => {
  const [recoverPassword, { isSuccess }] = useForgotPasswordMutation()
  const [email, setEmail] = useState('')
  const recoveryPasswordHandler = (data: ForgotParamsType) => {
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
