import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import { PrivateRoutes } from './PrivateRoutes.tsx'
import { privateRoutes, publicRoutes } from './routerSettings.tsx'

import { Route } from '@/common'
import { Header, Toast } from '@/components'
import { useLogoutMutation, useMeQuery } from '@/features'

const AppLayout = () => {
  const { data, isError } = useMeQuery()

  const [logout, { isLoading }] = useLogoutMutation()
  const isAuth = !isError

  return (
    <>
      <Toast />
      <Header
        name={data?.name}
        avatar={data?.avatar}
        email={data?.email}
        isLoggedIn={isAuth}
        logout={logout}
        isDisabled={isLoading}
      />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Navigate to={Route.NotFound} />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes,
      },
      ...publicRoutes,
    ],
  },
])

export const Router = () => <RouterProvider router={router} />
