type BadgeVariant = 'info' | 'success' | 'warning' | 'error'

type BadgeProps = {
  variant: BadgeVariant
  children: React.ReactNode
  className?: string
}

const Badge = ({ variant, children, className = '' }: BadgeProps) => {
  const variantConfig = {
    info: {
      bgColor: 'bg-primary-100',
      textColor: 'text-primary-700'
    },
    success: {
      bgColor: 'bg-green-100',
      textColor: 'text-green-700'
    },
    warning: {
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-700'
    },
    error: {
      bgColor: 'bg-red-100',
      textColor: 'text-red-700'
    }
  }

  const config = variantConfig[variant]

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-sm ${config.bgColor} ${config.textColor} ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge
