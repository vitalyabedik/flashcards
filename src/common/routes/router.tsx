import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import { PrivateRoutes } from './PrivateRoutes.tsx'
import { privateRoutes, publicRoutes } from './routerSettings.tsx'

import { Route } from '@/common'
import { Header } from '@/components'
import { useMeQuery } from '@/features'

const AppLayout = () => {
  const { isError } = useMeQuery()
  const isAuth = !isError

  return (
    <>
      <Header isLoggedIn={isAuth} />
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
