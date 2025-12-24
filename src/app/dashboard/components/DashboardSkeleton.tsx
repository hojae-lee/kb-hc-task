const DashboardSkeleton = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <div className="h-8 w-32 bg-disabled-200 rounded animate-pulse" />
        <div className="h-5 w-56 bg-disabled-200 rounded animate-pulse" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-lg border-2 border-disabled-200 bg-disabled-50 p-6"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="h-16 w-16 bg-disabled-200 rounded-full animate-pulse" />
              <div className="h-10 w-16 bg-disabled-200 rounded animate-pulse" />
              <div className="h-4 w-20 bg-disabled-200 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardSkeleton
