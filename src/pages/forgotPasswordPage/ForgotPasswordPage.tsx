import { useState } from 'react'

import { mutationNotificationHandler } from '@/common'
import { Page } from '@/components'
import {
  CheckEmail,
  ForgotPasswordForm,
  RecoverPasswordParamsType,
  useRecoverPasswordMutation,
} from '@/features'

export const ForgotPasswordPage = (): JSX.Element => {
  const [recoverPassword, { isSuccess }] = useRecoverPasswordMutation()
  const [email, setEmail] = useState('')
  const onSubmit = (requestData: RecoverPasswordParamsType) => {
    mutationNotificationHandler(recoverPassword(requestData), false).then(data => {
      if (data?.status === 'success') {
        setEmail(requestData.email)
      }
    })
  }

  return (
    <Page>
      {!isSuccess && <ForgotPasswordForm onSubmit={onSubmit} />}
      {isSuccess && <CheckEmail email={email} />}
    </Page>
  )
}
