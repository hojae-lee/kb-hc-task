import { Suspense } from 'react'

import LoadingFallback from '@common/components/ui/LoadingFallback'

export const SuspenseWrapper = ({
  children,
  fallback = <LoadingFallback />
}: {
  children: React.ReactNode
  fallback?: React.ReactNode
}) => {
  return <Suspense fallback={fallback}>{children}</Suspense>
}
