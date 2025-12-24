import { lazy } from 'react'

const RootPage = lazy(() => import('@/app/page'))

export const root = [
  {
    index: true,
    path: '/',
    element: <RootPage />
  }
]
