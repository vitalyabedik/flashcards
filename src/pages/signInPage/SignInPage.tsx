import { Page } from '@/components'
import { LoginParamsType, SignInForm, useLoginMutation } from '@/features'

export const SignInPage = (): JSX.Element => {
  const [login, { data }] = useLoginMutation()

  const loginHandler = (loginData: LoginParamsType) => {
    login(loginData)
  }

  console.log(data)

  return (
    <Page>
      <SignInForm onSubmit={loginHandler} />
    </Page>
  )
}
