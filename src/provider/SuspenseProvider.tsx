import { Suspense } from 'react'

export const SuspenseProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          <div>Loading...</div>
        </div>
      }
    >
      {children}
    </Suspense>
  )
}
