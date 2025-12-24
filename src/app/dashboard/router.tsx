import { lazy } from 'react'

import { SuspenseWrapper } from '@common/components/wrapper/SuspenseWrapper'
import DashboardSkeleton from '@app/dashboard/components/DashboardSkeleton'

const DashboardPage = lazy(() => import('@app/dashboard/page'))

export const dashboardRoutes = [
  {
    index: true,
    element: (
      <SuspenseWrapper fallback={<DashboardSkeleton />}>
        <DashboardPage />
      </SuspenseWrapper>
    )
  }
]
