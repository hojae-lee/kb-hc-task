import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useNavigate, useLocation } from 'react-router'

import { signIn } from '@api/sign-in'
import { useToast } from '@common/hooks/useToast'
import { useAppStore } from '@/store'

type UseSignInOptions = {
  onError?: (error: AxiosError) => void
}

export const useSignIn = (options?: UseSignInOptions) => {
  const { toastMessage } = useToast()
  const navigate = useNavigate()
  const location = useLocation()
  const setTokens = useAppStore((state) => state.setTokens)

  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      const { accessToken, refreshToken } = data
      setTokens(accessToken, refreshToken)
      toastMessage({ message: '로그인 성공', type: 'success' })

      // 로그인 성공시 다시 리다이렉트 시키기
      const searchParams = new URLSearchParams(location.search)
      const redirectTo = searchParams.get('redirect') || '/'
      navigate(redirectTo)
    },
    onError: (error) => {
      if (options?.onError) {
        options.onError(error as AxiosError)
      } else {
        const { response } = error as AxiosError
        const { errorMessage } = (response?.data as {
          errorMessage: string
        }) || {
          errorMessage: '로그인에 실패했습니다.'
        }
        toastMessage({ message: errorMessage, type: 'error' })
      }
    }
  })
}

export default useSignIn
