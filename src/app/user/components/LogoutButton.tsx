import { useNavigate } from 'react-router'
import { LogOut } from 'lucide-react'

import Button from '@common/components/ui/Button'
import { useAppStore } from '@/store'

const LogoutButton = () => {
  const navigate = useNavigate()
  const clearTokens = useAppStore((state) => state.clearTokens)

  const handleLogout = () => {
    clearTokens()
    navigate('/sign-in')
  }

  return (
    <Button
      onClick={handleLogout}
      className="flex items-center gap-2 bg-red-500"
    >
      <LogOut className="h-4 w-4" />
      로그아웃
    </Button>
  )
}

export default LogoutButton
