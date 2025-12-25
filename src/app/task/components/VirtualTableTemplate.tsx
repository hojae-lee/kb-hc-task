import { useRef, useEffect } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
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
  const parentRef = useRef<HTMLDivElement>(null)
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

  const rowVirtualizer = useVirtualizer({
    count: allTasks.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 100
  })

  useEffect(() => {
    const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse()

    if (!lastItem) return

    if (
      lastItem.index >= allTasks.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage()
    }
  }, [
    hasNextPage,
    fetchNextPage,
    allTasks.length,
    isFetchingNextPage,
    rowVirtualizer.getVirtualItems()
  ])

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
    <div ref={parentRef} className="h-[calc(100vh-300px)] overflow-auto">
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative'
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const task = allTasks[virtualRow.index]

          if (!task) return null

          return (
            <div
              key={virtualRow.key}
              data-index={virtualRow.index}
              ref={rowVirtualizer.measureElement}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`
              }}
            >
              <TaskCard
                task={task}
                onClick={() => navigate(`/task/${task.id}`)}
              />
            </div>
          )
        })}
      </div>

      {isFetchingNextPage && (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      )}
    </div>
  )
}

export default VirtualTableTemplate
