import { useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'

import { taskKeys, getTask } from '@api/task'

export const useTaskId = () => {
  const params = useParams()
  const id = params.id ?? ('' as string)

  return { id }
}

export const useTaskDetail = (id: string) => {
  return useQuery({
    queryKey: [...taskKeys.detail(id)],
    queryFn: () => getTask(id)
  })
}
