import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes = () => {
  const isAuth = false

  return isAuth ? <Outlet /> : <Navigate to="login" />
}
