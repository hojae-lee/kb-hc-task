import { useState } from 'react'

import VirtualTableTemplate from '@app/task/components/VirtualTableTemplate'
import ErrorModal from '@app/task/components/ErrorModal'

const TaskListPage = () => {
  const [errorModalOpen, setErrorModalOpen] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-disabled-900">할 일</h1>
        <p className="text-sm text-disabled-600">
          할 일 목록을 확인하고 관리하세요
        </p>
      </div>
      <VirtualTableTemplate
        setErrorModalOpen={setErrorModalOpen}
        setErrorMessage={setErrorMessage}
      />
      <ErrorModal
        open={errorModalOpen}
        onClose={() => setErrorModalOpen(false)}
        errorMessage={errorMessage}
      />
    </div>
  )
}

export default TaskListPage
