const UserSkeleton = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <div className="h-8 w-32 bg-disabled-200 rounded animate-pulse" />
        <div className="h-5 w-56 bg-disabled-200 rounded animate-pulse" />
      </div>

      <div className="rounded-lg border-2 border-disabled-200 bg-disabled-50 p-6">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 bg-disabled-200 rounded-full animate-pulse" />
          <div className="flex flex-col gap-4">
            <div>
              <div className="h-6 w-32 bg-disabled-200 rounded animate-pulse" />
            </div>
            <div>
              <div className="h-5 w-full bg-disabled-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSkeleton
