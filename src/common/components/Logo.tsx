import { Link } from 'react-router'

type LogoProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
}

const Logo = ({ size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    xxl: 'text-2xl',
    xxxl: 'text-3xl'
  }

  return (
    <Link to="/">
      <h1
        className={`font-bold text-yellow-500 ${sizeClasses[size]} cursor-pointer`}
      >
        KB HC Task
      </h1>
    </Link>
  )
}

export default Logo
