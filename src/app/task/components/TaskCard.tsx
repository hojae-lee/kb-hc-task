import type { TaskItem } from '@/api/task/schema'
import Badge from '@common/components/ui/Badge'

type TaskCardProps = {
  task: TaskItem
  onClick: () => void
}

const TaskCard = ({ task, onClick }: TaskCardProps) => {
  return (
    <div
      onClick={onClick}
      className="mb-4 p-4 bg-white rounded-lg border-2 border-disabled-200 hover:border-primary transition-all cursor-pointer"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-disabled-900">
            {task.title}
          </h3>
          <p className="text-sm text-disabled-600">{task.memo}</p>
        </div>
        <Badge variant={task.status === 'TODO' ? 'info' : 'success'}>
          {task.status === 'TODO' ? '해야할 일' : '완료'}
        </Badge>
      </div>
    </div>
  )
}

export default TaskCard
