import { Suspense } from 'react'

import LoadingFallback from '@common/components/LoadingFallback'

export const SuspenseProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  return <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
}
