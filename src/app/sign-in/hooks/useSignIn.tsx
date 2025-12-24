import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { signIn } from '@api/sign-in'
import { useToast } from '@common/hooks/useToast'

export const useSignIn = () => {
  const { toastMessage } = useToast()

  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      toastMessage({ message: '로그인 성공', type: 'success' })
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
