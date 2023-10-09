import { Navigate, Outlet } from 'react-router-dom'

import { Route } from '@/common'

export const PrivateRoutes = () => {
  const isAuth = true

  return isAuth ? <Outlet /> : <Navigate to={Route.SignIn} />
}
