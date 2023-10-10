import { Navigate, Outlet } from 'react-router-dom'

import { Route, TypographyVariant } from '@/common'
import { Typography } from '@/components'
import { useMeQuery } from '@/features'

export const PrivateRoutes = () => {
  const { isLoading, isError } = useMeQuery()
  const isAuth = !isError

  if (isLoading) {
    return (
      <Typography variant={TypographyVariant.Large} as="h1">
        Loading...
      </Typography>
    )
  }

  return isAuth ? <Outlet /> : <Navigate to={Route.SignIn} />
}
