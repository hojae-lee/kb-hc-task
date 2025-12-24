import { get } from '@api/http'
import type { DashboardResponse } from '@api/dashboard/schema'

// api url
export const API_URL = '/api/dashboard'

// react query keys
export const dashboardKeys = {
  all: ['dashboard'] as const,
  detail: () => [...dashboardKeys.all, 'detail'] as const
}

// fetcher
export const getDashboard = async (): Promise<DashboardResponse> => {
  return (await get(API_URL)) as DashboardResponse
}
