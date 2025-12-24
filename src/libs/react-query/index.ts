import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error: any) => {
        if ((error as { isAuthError: boolean }).isAuthError) {
          return false
        }
        return failureCount < 3
      }
    }
  }
})
