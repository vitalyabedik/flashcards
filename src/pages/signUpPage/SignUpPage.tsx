import { useNavigate } from 'react-router-dom'

import { mutationNotificationHandler, Route } from '@/common'
import { Page } from '@/components'
import { SignUpDataType, SignUpForm, useSignUpMutation } from '@/features'

export const SignUpPage = (): JSX.Element => {
  const [signUp] = useSignUpMutation()
  const navigate = useNavigate()

  const signUpHandler = ({ email, password }: SignUpDataType) => {
    mutationNotificationHandler(
      signUp({ email, password }),
      false,
      'Congratulations, your account has been successfully created. Try to login.'
    ).then(data => {
      if (data?.status === 'success') {
        navigate(Route.SignIn)
      }
    })
  }

  return (
    <Page>
      <SignUpForm onSubmit={signUpHandler} />
    </Page>
  )
}
