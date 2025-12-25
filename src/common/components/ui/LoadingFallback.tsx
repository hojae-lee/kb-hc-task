import { Loader2 } from 'lucide-react'

const LoadingFallback = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white opacity-50">
    <Loader2 className="h-8 w-8 animate-spin text-primary-500" />
  </div>
)

export default LoadingFallback
