import { useQuery } from '@tanstack/react-query'
import { getDashboard, dashboardKeys } from '@api/dashboard'

export const useGetDashboard = () => {
  return useQuery({
    queryKey: [...dashboardKeys.all],
    queryFn: getDashboard
  })
}
