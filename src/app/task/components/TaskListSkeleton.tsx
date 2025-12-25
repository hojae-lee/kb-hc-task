const TaskListSkeleton = () => {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="rounded-lg border-2 border-disabled-200 p-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2">
              <div className="h-6 w-3/4 bg-disabled-200 rounded" />
              <div className="h-4 w-full bg-disabled-200 rounded" />
            </div>
            <div className="h-6 w-20 bg-disabled-200 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskListSkeleton
