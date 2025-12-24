import { Navigate, useLocation } from 'react-router'

import { useAppStore } from '@/store'

type ProtectedRouteProviderProps = {
  children: React.ReactNode
}

// 라우터 가드 프로바이져
export const ProtectedRouteProvider = ({
  children
}: ProtectedRouteProviderProps) => {
  const location = useLocation()
  const isAuthenticated = useAppStore((state) => state.isAuthenticated)

  if (!isAuthenticated) {
    return (
      <Navigate
        to={`/sign-in?redirect=${encodeURIComponent(location.pathname)}`}
        replace
      />
    )
  }

  return <>{children}</>
}
