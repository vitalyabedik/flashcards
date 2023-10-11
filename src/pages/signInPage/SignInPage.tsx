import { Navigate } from 'react-router-dom'

import { Route, TypographyVariant } from '@/common'
import { Page, Typography } from '@/components'
import { LoginParamsType, SignInForm, useLoginMutation, useMeQuery } from '@/features'

export const SignInPage = (): JSX.Element => {
  const { isLoading, isError } = useMeQuery()
  const [login] = useLoginMutation()

  const isAuth = !isError

  const loginHandler = (loginData: LoginParamsType) => {
    login(loginData)
  }

  if (isLoading) {
    return (
      <Typography variant={TypographyVariant.Large} as="h1">
        Loading...
      </Typography>
    )
  }

  if (isAuth) return <Navigate to={Route.Main} replace={true} />

  return (
    <Page>
      <SignInForm onSubmit={loginHandler} />
    </Page>
  )
}
