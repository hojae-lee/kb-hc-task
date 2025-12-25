import { Virtuoso } from 'react-virtuoso'
import { useNavigate } from 'react-router'

import TaskCard from '@app/task/components/TaskCard'
import Spinner from '@common/components/ui/Spinner'
import TaskListSkeleton from '@app/task/components/TaskListSkeleton'

import { useTaskList } from '@app/task/hooks/useTaskList'

const VirtualTableTemplate = ({
  setErrorModalOpen,
  setErrorMessage
}: {
  setErrorModalOpen: (open: boolean) => void
  setErrorMessage: (message: string) => void
}) => {
  const navigate = useNavigate()

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error
  } = useTaskList()

  const allTasks = data?.pages.flat() ?? []

  if (isLoading) {
    return <TaskListSkeleton />
  }

  if (error) {
    const axiosError = error as any
    const is400Error = axiosError?.response?.status === 400
    const errorMessage = axiosError?.response?.data?.errorMessage

    if (is400Error) {
      setErrorModalOpen(true)
      setErrorMessage(errorMessage)
    }

    return null
  }

  return (
    <Virtuoso
      style={{ height: 'calc(100vh - 300px)' }}
      data={allTasks}
      endReached={() => {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage()
        }
      }}
      itemContent={(_, task) => (
        <TaskCard task={task} onClick={() => navigate(`/task/${task.id}`)} />
      )}
      components={{
        Footer: () =>
          isFetchingNextPage ? (
            <div className="flex items-center justify-center p-4">
              <Spinner />
            </div>
          ) : null
      }}
    />
  )
}

export default VirtualTableTemplate
