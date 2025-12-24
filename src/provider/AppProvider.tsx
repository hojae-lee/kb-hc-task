import { Toaster } from 'sonner'

import { ReactQueryProvider } from '@/provider/ReactQueryProvider'
import { ReactRouterProvider } from '@/provider/ReactRouterProvider'

export const AppProvider = () => {
  return (
    <ReactQueryProvider>
      <ReactRouterProvider />
      <Toaster position="bottom-right" richColors />
    </ReactQueryProvider>
  )
}
