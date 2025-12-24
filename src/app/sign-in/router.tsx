import { lazy } from 'react'

import { SuspenseProvider } from '@provider/SuspenseProvider'

const SignInPage = lazy(() => import('@app/sign-in/page'))

export const signInRoute = [
  {
    path: '/sign-in',
    element: (
      <SuspenseProvider>
        <SignInPage />
      </SuspenseProvider>
    )
  }
]
