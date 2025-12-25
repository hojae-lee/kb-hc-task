import { lazy } from 'react'

import { SuspenseWrapper } from '@common/components/wrapper/SuspenseWrapper'

import { queryClient } from '@/libs/react-query'
import { taskKeys, getTask } from '@api/task'

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
    ),
    loader: async ({ params }: { params: { id: string } }) => {
      const { id } = params

      try {
        await queryClient.ensureQueryData({
          queryKey: [...taskKeys.detail(id)],
          queryFn: () => getTask(id)
        })
      } catch (error: any) {
        if (error?.response?.status === 404) {
          throw new Response(null, { status: 404 })
        }
        throw error
      }
    }
  }
]
