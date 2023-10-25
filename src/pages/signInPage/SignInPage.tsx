import { Navigate } from 'react-router-dom'

import { Route } from '@/common'
import { Page, Preloader } from '@/components'
import { LoginParamsType, SignInForm, useLoginMutation, useMeQuery } from '@/features'

export const SignInPage = (): JSX.Element => {
  const { isLoading, isError } = useMeQuery()
  const [login] = useLoginMutation()

  const isAuth = !isError

  const loginHandler = (loginData: LoginParamsType) => {
    login(loginData)
  }

  if (isLoading) {
    return <Preloader />
  }

  if (isAuth) return <Navigate to={Route.Main} replace={true} />

  return (
    <Page>
      <SignInForm onSubmit={loginHandler} />
    </Page>
  )
}
