import { RouteObject } from 'react-router-dom'

export const privateRoutes: RouteObject[] = [
  { path: '/', element: <div>Main page</div> },
  { path: '/profile', element: <div>Profile page</div> },
  { path: '/decks', element: <div>Decks page</div> },
  { path: '/decks/:id', element: <div>Deck page</div> },
]

export const publicRoutes: RouteObject[] = [
  { path: '/login', element: <div>Sign-in (login) page</div> },
  { path: '/sign-up', element: <div>Sign-up page</div> },
  { path: '/forgot-password', element: <div>Forgot password page</div> },
  { path: '/create-new-password', element: <div>Create new password page</div> },
  { path: '/404', element: <div>Page not found -- 404</div> },
]
