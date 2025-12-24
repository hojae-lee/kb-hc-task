import { Loader } from 'lucide-react'

type SpinnerProps = {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const Spinner = ({ size = 'md', className = '' }: SpinnerProps) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  }

  return (
    <Loader
      className={`${sizeClasses[size]} animate-spin text-current ${className}`}
    />
  )
}

export default Spinner
