import { lazy } from 'react'

import { SuspenseWrapper } from '@common/components/wrapper/SuspenseWrapper'
import UserSkeleton from '@app/user/components/UserSkeleton'

const UserPage = lazy(() => import('@app/user/page'))

export const userRoutes = [
  {
    path: 'user',
    element: (
      <SuspenseWrapper fallback={<UserSkeleton />}>
        <UserPage />
      </SuspenseWrapper>
    )
  }
]
