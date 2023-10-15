import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import { PrivateRoutes } from './PrivateRoutes.tsx'
import { privateRoutes, publicRoutes } from './routerSettings.tsx'

import { Route } from '@/common'
import { Header } from '@/components'
import { useLogoutMutation, useMeQuery } from '@/features'

const AppLayout = () => {
  const { data, isError } = useMeQuery()

  const [logout] = useLogoutMutation()
  const isAuth = !isError

  return (
    <>
      <Header
        name={data?.name}
        avatar={data?.avatar}
        email={data?.email}
        isLoggedIn={isAuth}
        logout={logout}
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
