export type TaskStatus = 'TODO' | 'DONE'

export interface TaskItem {
  id: string
  title: string
  memo: string
  status: TaskStatus
}

export interface TaskListRequest {
  page: number
}

export interface TaskDetailResponse {
  id: string
  title: string
  memo: string
  registerDatetime: string
}

export interface TaskErrorResponse {
  errorMessage: string
}
