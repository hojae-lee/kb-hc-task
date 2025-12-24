import { Suspense } from 'react'

import LoadingFallback from '@common/components/LoadingFallback'

export const SuspenseProvider = ({
  children,
  fallback = <LoadingFallback />
}: {
  children: React.ReactNode
  fallback?: React.ReactNode
}) => {
  return <Suspense fallback={fallback}>{children}</Suspense>
}
