import { lazy } from 'react'

import { SuspenseWrapper } from '@common/components/wrapper/SuspenseWrapper'

const SignInPage = lazy(() => import('@app/sign-in/page'))

export const signInRoute = [
  {
    path: '/sign-in',
    element: (
      <SuspenseWrapper>
        <SignInPage />
      </SuspenseWrapper>
    )
  }
]
