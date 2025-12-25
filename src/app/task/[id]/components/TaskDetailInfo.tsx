import { FileText } from 'lucide-react'
import dayjs from 'dayjs'

import { useTaskDetail } from '@app/task/[id]/hooks/useTask'
import Label from '@common/components/ui/Label'
import TaskDetailSkeleton from '@app/task/[id]/components/TaskDetailSkeleton'

type TaskDetailInfoProps = {
  id: string
}

const TaskDetailInfo = ({ id }: TaskDetailInfoProps) => {
  const { data, isLoading } = useTaskDetail(id)

  if (isLoading) {
    return <TaskDetailSkeleton />
  }

  if (!data) return null

  return (
    <div className="rounded-lg border-2 border-primary-200 bg-primary-50 p-6">
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-primary-100 p-3">
          <FileText className="h-6 w-6 text-primary-600" />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <Label>제목</Label>
            <p className="mt-1 text-lg font-semibold text-disabled-900">
              {data.title}
            </p>
          </div>
          <div>
            <Label>메모</Label>
            <p className="mt-1 text-base text-disabled-700 whitespace-pre-wrap">
              {data.memo}
            </p>
          </div>
          <div>
            <Label>등록일시</Label>
            <p className="mt-1 text-base text-disabled-700">
              {dayjs(data.registerDatetime).format('YYYY-MM-DD HH:mm:ss')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskDetailInfo
