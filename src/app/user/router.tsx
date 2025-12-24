import { lazy } from 'react'

const UserPage = lazy(() => import('@/app/user/page'))

export const userRoutes = [
  {
    path: 'user',
    element: <UserPage />
  }
]
