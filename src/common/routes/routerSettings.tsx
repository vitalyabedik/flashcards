import { RouteObject } from 'react-router-dom'

import { Route } from '@/common'
import { SignInPage, SignUpPage, ForgotPassword, CreateNewPassword, NotFoundPage } from '@/pages'

export const privateRoutes: RouteObject[] = [
  { path: Route.Main, element: <div>Main page</div> },
  { path: Route.Profile, element: <div>Profile page</div> },
  { path: Route.Decks, element: <div>Decks page</div> },
  { path: `${Route.Decks}/:id`, element: <div>Deck page</div> },
]

export const publicRoutes: RouteObject[] = [
  { path: Route.SignIn, element: <SignInPage /> },
  { path: Route.SignUp, element: <SignUpPage /> },
  { path: Route.ForgotPassword, element: <ForgotPassword /> },
  { path: Route.CreateNewPassword, element: <CreateNewPassword /> },
  { path: Route.NotFound, element: <NotFoundPage /> },
]
