import { ReactQueryProvider } from '@/provider/ReactQueryProvider'
import { ReactRouterProvider } from '@/provider/ReactRouterProvider'

export const AppProvider = () => {
  return (
    <ReactQueryProvider>
      <ReactRouterProvider />
    </ReactQueryProvider>
  )
}
