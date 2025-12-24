import { ComponentPropsWithoutRef } from 'react'

type LabelProps = ComponentPropsWithoutRef<'label'> & {
  required?: boolean
}

const Label = ({
  children,
  required,
  className = '',
  ...props
}: LabelProps) => {
  return (
    <label
      className={`mb-2 block text-sm font-medium text-disabled-700 ${className}`}
      {...props}
    >
      {children}
      {required && <span className="ml-1 text-red-500">*</span>}
    </label>
  )
}

export default Label
