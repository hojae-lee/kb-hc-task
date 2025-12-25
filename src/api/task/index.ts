import { get } from '@api/http'
import type {
  TaskItem,
  TaskListRequest,
  TaskDetailResponse
} from '@api/task/schema'

// api url
export const API_URL = '/api/task'

// react query keys
export const taskKeys = {
  all: ['tasks'] as const,
  list: () => [...taskKeys.all, 'list'] as const,
  detail: (id: string) => [...taskKeys.all, 'detail', id] as const
}

// fetcher
export const getTaskList = async (
  params: TaskListRequest
): Promise<TaskItem[]> => {
  return (await get(API_URL, params)) as TaskItem[]
}

export const getTask = async (id: string): Promise<TaskDetailResponse> => {
  return (await get(`${API_URL}/${id}`)) as TaskDetailResponse
}
