import { ComponentPropsWithoutRef } from 'react'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'disabled'
  fullWidth?: boolean
}

const Button = ({
  variant = 'primary',
  fullWidth = false,
  className = '',
  disabled,
  children,
  ...props
}: ButtonProps) => {
  const baseClasses = 'rounded-lg px-4 py-3 font-semibold transition-all'
  const variantClasses = {
    primary: disabled
      ? 'bg-disabled-300 text-disabled-500 cursor-not-allowed'
      : 'bg-primary text-white hover:bg-primary-600 active:scale-[0.98] shadow-md hover:shadow-lg',
    disabled: 'bg-disabled-300 text-disabled-500 cursor-not-allowed'
  }
  const widthClass = fullWidth ? 'w-full' : ''

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
