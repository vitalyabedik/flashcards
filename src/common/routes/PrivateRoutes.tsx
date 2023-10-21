import { Navigate, Outlet } from 'react-router-dom'

import { Route } from '@/common'
import { Preloader } from '@/components'
import { useMeQuery } from '@/features'

export const PrivateRoutes = () => {
  const { isLoading, isError } = useMeQuery()
  const isAuth = !isError

  if (isLoading) {
    return <Preloader />
  }

  return isAuth ? <Outlet /> : <Navigate to={Route.SignIn} />
}
