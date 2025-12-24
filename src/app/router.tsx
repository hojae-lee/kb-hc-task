import { lazy } from 'react'

const RootPage = lazy(() => import('@/app/page'))

const root = {
  path: '/',
  element: <RootPage />
}

export default root
