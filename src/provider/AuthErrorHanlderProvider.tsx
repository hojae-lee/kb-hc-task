import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router'
import { useQueryClient } from '@tanstack/react-query'

// api 호출 핸들러 프로바이져
export const AuthErrorHandlerProvider = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const queryClient = useQueryClient()

  useEffect(() => {
    // subscribe 를 통해 queryClient 의 상태 변경을 감지할 수 있음. 이를 이용해 error 감지
    const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
      if (event.type === 'updated' && event.action.type === 'error') {
        const error = event.action.error as any

        // isAuthError (401) 가 true 인 경우, 로그인 페이지로 리다이렉트
        if (error?.isAuthError && location.pathname !== '/sign-in') {
          navigate(`/sign-in?redirect=${encodeURIComponent(location.pathname)}`)
        }
      }
    })

    return unsubscribe
  }, [navigate, location, queryClient])

  return null
}
