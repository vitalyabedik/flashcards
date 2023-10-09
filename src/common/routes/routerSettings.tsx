import { RouteObject } from 'react-router-dom'

import { Route } from '@/common'
import {
  SignInPage,
  SignUpPage,
  ForgotPasswordPage,
  CreateNewPasswordPage,
  NotFoundPage,
  ProfilePage,
  DecksPage,
} from '@/pages'

export const privateRoutes: RouteObject[] = [
  { path: Route.Main, element: <div>Main page</div> },
  { path: Route.Profile, element: <ProfilePage /> },
  { path: Route.Decks, element: <DecksPage /> },
  { path: `${Route.Decks}/:id`, element: <div>Deck page</div> },
]

export const publicRoutes: RouteObject[] = [
  { path: Route.SignIn, element: <SignInPage /> },
  { path: Route.SignUp, element: <SignUpPage /> },
  { path: Route.ForgotPassword, element: <ForgotPasswordPage /> },
  { path: Route.CreateNewPassword, element: <CreateNewPasswordPage /> },
  { path: Route.NotFound, element: <NotFoundPage /> },
]
