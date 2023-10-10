import { Page } from '@/components'
import { SignUpDataType, SignUpForm, useSignUpMutation } from '@/features'

export const SignUpPage = (): JSX.Element => {
  const [signUp] = useSignUpMutation()

  const signUpHandler = ({ email, password }: SignUpDataType) => {
    signUp({ email, password })
  }

  return (
    <Page>
      <SignUpForm onSubmit={signUpHandler} />
    </Page>
  )
}
