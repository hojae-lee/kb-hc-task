import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router'

import { signIn } from '@api/sign-in'
import { useToast } from '@common/hooks/useToast'
import { useAppStore } from '@/store'

export const useSignIn = () => {
  const { toastMessage } = useToast()
  const navigate = useNavigate()
  const setTokens = useAppStore((state) => state.setTokens)

  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      const { accessToken, refreshToken } = data
      setTokens(accessToken, refreshToken)
      toastMessage({ message: '로그인 성공', type: 'success' })
      navigate('/')
    },
    onError: (error) => {
      const { response } = error as AxiosError
      const { errorMessage } = response?.data as { errorMessage: string }
      // 로그인 실패시 메시지 띄우기
      toastMessage({ message: errorMessage, type: 'error' })
    }
  })
}

export default useSignIn
