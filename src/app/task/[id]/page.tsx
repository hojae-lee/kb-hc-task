import { useState } from 'react'
import { Trash2 } from 'lucide-react'

import TaskDetailInfo from '@app/task/[id]/components/TaskDetailInfo'
import DeleteModal from '@app/task/[id]/components/DeleteModal'
import Button from '@common/components/ui/Button'

import { useTaskId } from '@app/task/[id]/hooks/useTask'

const TaskDetailPage = () => {
  const { id } = useTaskId()
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-disabled-900">할 일 상세</h1>
            <p className="text-sm text-disabled-600">
              할 일 정보를 확인하고 관리하세요
            </p>
          </div>
          <Button
            onClick={() => setDeleteModalOpen(true)}
            variant="basic"
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white"
          >
            <Trash2 className="h-5 w-5" />
            삭제
          </Button>
        </div>
        <TaskDetailInfo id={id} />
      </div>
      <DeleteModal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        taskId={id}
      />
    </div>
  )
}

export default TaskDetailPage
