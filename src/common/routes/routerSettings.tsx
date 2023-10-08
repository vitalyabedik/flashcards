import { RouteObject } from 'react-router-dom'

import { SignUpPage, CreateNewPassword, ForgotPassword, NotFoundPage, ProfilePage } from '@/pages'

export const privateRoutes: RouteObject[] = [
  { path: '/', element: <div>Main page</div> },
  { path: '/profile', element: <ProfilePage /> },
  { path: '/decks', element: <div>Decks page</div> },
  { path: '/decks/:id', element: <div>Deck page</div> },
]

export const publicRoutes: RouteObject[] = [
  { path: '/login', element: <div>Sign-in (login) page</div> },
  { path: '/sign-up', element: <SignUpPage /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/create-new-password', element: <CreateNewPassword /> },
  { path: '/404', element: <NotFoundPage /> },
]
