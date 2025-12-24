import { ComponentPropsWithoutRef } from 'react'

type InputProps = ComponentPropsWithoutRef<'input'> & {
  icon?: React.ReactNode
}

const Input = ({ icon, className = '', ...props }: InputProps) => {
  const paddingClass = icon ? 'px-10' : 'px-3'

  return (
    <div className="relative">
      {icon && (
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {icon}
        </div>
      )}
      <input
        className={`w-full rounded-lg border border-disabled-300 bg-white ${paddingClass} py-2.5 transition-colors focus:border-primary-500 focus:ring-primary-500 focus:outline-none focus:ring-2 ${className}`}
        {...props}
      />
    </div>
  )
}

export default Input
