import { lazy } from 'react'

const DashboardPage = lazy(() => import('@app/dashboard/page'))

export const dashboardRoutes = [
  {
    index: true,
    element: <DashboardPage />
  }
]
