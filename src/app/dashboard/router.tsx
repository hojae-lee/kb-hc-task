import { lazy } from 'react'

import { SuspenseProvider } from '@provider/SuspenseProvider'
import DashboardSkeleton from '@app/dashboard/components/DashboardSkeleton'

const DashboardPage = lazy(() => import('@app/dashboard/page'))

export const dashboardRoutes = [
  {
    index: true,
    element: (
      <SuspenseProvider fallback={<DashboardSkeleton />}>
        <DashboardPage />
      </SuspenseProvider>
    )
  }
]
