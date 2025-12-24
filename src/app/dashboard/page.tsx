import CardList from '@app/dashboard/components/CardList'

import { useGetDashboard } from '@app/dashboard/hooks/useDashboard'

const DashboardPage = () => {
  const { data } = useGetDashboard()

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-disabled-900">대시보드</h1>
        <p className="text-sm text-disabled-600">
          할 일 현황을 한눈에 확인하세요
        </p>
      </div>
      <CardList data={data} />
    </div>
  )
}

export default DashboardPage
