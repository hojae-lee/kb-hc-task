import { lazy } from 'react'

import { SuspenseProvider } from '@provider/SuspenseProvider'

const TaskListPage = lazy(() => import('@app/task/page'))
const TaskDetailPage = lazy(() => import('@app/task/[id]/page'))

export const taskRoutes = [
  {
    path: 'task',
    element: (
      <SuspenseProvider>
        <TaskListPage />
      </SuspenseProvider>
    )
  },
  {
    path: 'task/:id',
    element: (
      <SuspenseProvider>
        <TaskDetailPage />
      </SuspenseProvider>
    )
  }
]
