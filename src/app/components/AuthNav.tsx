import { Link, useLocation } from 'react-router'
import { User, LogIn } from 'lucide-react'
import { tokenStorage } from '@api/config'

const AuthNav = () => {
  const location = useLocation()
  // todo: 로그인 상태값을 별도 store 로 처리 예정.
  const isAuthenticated = !!tokenStorage.getAccessToken()

  if (isAuthenticated) {
    return (
      <Link
        to="/user"
        className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
          location.pathname === '/user'
            ? 'bg-primary text-white'
            : 'text-primary-700 hover:bg-primary-100'
        }`}
        title="회원정보"
      >
        <User className="h-5 w-5" />
      </Link>
    )
  }

  return (
    <Link
      to="/sign-in"
      className="flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-primary-700 hover:bg-primary-100"
      title="로그인"
    >
      <LogIn className="h-5 w-5" />
    </Link>
  )
}

export default AuthNav
