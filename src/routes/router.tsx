import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import { PrivateRoutes } from './PrivateRoutes'
import { privateRoutes, publicRoutes } from './router-settings'

import { Header } from '@/components'

// https://stackoverflow.com/questions/75785717/i-am-using-createbrowserrouter-what-is-the-proper-way-to-have-header-and-footer

const AppLayout = () => {
  return (
    <>
      <Header isLoggedIn={false} />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes,
      },
      ...publicRoutes,
      { path: '*', element: <Navigate to={'/404'} /> },
    ],
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
