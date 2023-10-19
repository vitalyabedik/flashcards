import { Navigate, Outlet } from 'react-router-dom'

import { Loading } from '@/assets'
import { Route } from '@/common'
import { useMeQuery } from '@/features'

export const PrivateRoutes = () => {
  const { isLoading, isError } = useMeQuery()
  const isAuth = !isError

  if (isLoading) {
    return <Loading />
  }

  return isAuth ? <Outlet /> : <Navigate to={Route.SignIn} />
}
