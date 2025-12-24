import { lazy } from 'react'

const TaskListPage = lazy(() => import('@app/task/page'))
const TaskDetailPage = lazy(() => import('@app/task/[id]/page'))

export const taskRoutes = [
  {
    path: 'task',
    element: <TaskListPage />
  },
  {
    path: 'task/:id',
    element: <TaskDetailPage />
  }
]
