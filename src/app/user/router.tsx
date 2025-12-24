import { lazy } from 'react'

import { SuspenseProvider } from '@provider/SuspenseProvider'

const UserPage = lazy(() => import('@app/user/page'))

export const userRoutes = [
  {
    path: 'user',
    element: (
      <SuspenseProvider>
        <UserPage />
      </SuspenseProvider>
    )
  }
]
