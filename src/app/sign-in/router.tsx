import { lazy } from 'react'

const SignInPage = lazy(() => import('@app/sign-in/page'))

export const signInRoute = [
  {
    path: '/sign-in',
    element: <SignInPage />
  }
]
