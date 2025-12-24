import { Suspense } from 'react'

import LoadingFallback from '@/components/ui/LoadingFallback'

export const SuspenseProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  return <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
}
