import { lazy } from 'react'

import { SuspenseWrapper } from '@common/components/wrapper/SuspenseWrapper'

const TaskListPage = lazy(() => import('@app/task/page'))
const TaskDetailPage = lazy(() => import('@app/task/[id]/page'))

export const taskRoutes = [
  {
    path: 'task',
    element: (
      <SuspenseWrapper>
        <TaskListPage />
      </SuspenseWrapper>
    )
  },
  {
    path: 'task/:id',
    element: (
      <SuspenseWrapper>
        <TaskDetailPage />
      </SuspenseWrapper>
    )
  }
]
