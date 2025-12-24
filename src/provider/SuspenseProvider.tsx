import { Suspense } from 'react'

import LoadingFallback from '@/components/common/LoadingFallback'

export const SuspenseProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  return <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
}
