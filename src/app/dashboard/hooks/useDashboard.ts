import { useSuspenseQuery } from '@tanstack/react-query'
import { getDashboard, dashboardKeys } from '@api/dashboard'

export const useGetDashboard = () => {
  return useSuspenseQuery({
    queryKey: [...dashboardKeys.all],
    queryFn: getDashboard
  })
}
