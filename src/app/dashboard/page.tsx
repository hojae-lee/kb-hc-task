import { useGetDashboard } from '@app/dashboard/hooks/useDashboard'

const DashboardPage = () => {
  const { data, isLoading, error } = useGetDashboard()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  console.log(data)

  return <div>hello world - Dashboard</div>
}

export default DashboardPage
