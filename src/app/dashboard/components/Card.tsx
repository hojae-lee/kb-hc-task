import { LucideIcon } from 'lucide-react'

type CardProps = {
  label: string
  value: number
  icon: LucideIcon
  bgColor: string
  iconColor: string
  borderColor: string
}

const Card = ({
  label,
  value,
  icon: Icon,
  bgColor,
  iconColor,
  borderColor
}: CardProps) => {
  return (
    <div
      className={`
        rounded-lg border-2 ${borderColor} ${bgColor} p-6
      `}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className={`rounded-full bg-white p-4 shadow-sm ${iconColor}`}>
          <Icon className="h-8 w-8" />
        </div>
        <p className="text-sm font-medium text-disabled-600">{label}</p>
        <p className="text-4xl font-bold text-disabled-900 tabular-nums">
          {value}
        </p>
      </div>
    </div>
  )
}

export default Card
