import { RouteObject } from 'react-router-dom'

import { SignInPage, CreateNewPassword, ForgotPassword, NotFoundPage } from '@/pages'

export const privateRoutes: RouteObject[] = [
  { path: '/', element: <div>Main page</div> },
  { path: '/profile', element: <div>Profile page</div> },
  { path: '/decks', element: <div>Decks page</div> },
  { path: '/decks/:id', element: <div>Deck page</div> },
]

export const publicRoutes: RouteObject[] = [
  { path: '/sign-in', element: <SignInPage /> },
  { path: '/sign-up', element: <div>Sign-up page</div> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/create-new-password', element: <CreateNewPassword /> },
  { path: '/404', element: <NotFoundPage /> },
]
