// CardList.tsx
import { ClipboardList, Clock, CheckCircle } from 'lucide-react'

import Card from '@app/dashboard/components/Card'
import { useGetDashboard } from '@app/dashboard/hooks/useDashboard'

const CardList = () => {
  const { data } = useGetDashboard()

  const stats = [
    {
      label: '일',
      value: data.numOfTask,
      icon: ClipboardList,
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600',
      borderColor: 'border-primary-200'
    },
    {
      label: '해야할 일',
      value: data.numOfRestTask,
      icon: Clock,
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-200'
    },
    {
      label: '한 일',
      value: data.numOfDoneTask,
      icon: CheckCircle,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200'
    }
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          label={stat.label}
          value={stat.value}
          icon={stat.icon}
          bgColor={stat.bgColor}
          iconColor={stat.iconColor}
          borderColor={stat.borderColor}
        />
      ))}
    </div>
  )
}

export default CardList
