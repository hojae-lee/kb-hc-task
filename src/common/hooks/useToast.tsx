import { toast } from 'sonner'

type ToastProps = {
  message: string
  type: 'success' | 'error'
}

export const useToast = () => {
  const toastMessage = (props: ToastProps) => {
    const { message, type } = props
    toast[type](message)
  }
  return { toastMessage }
}
