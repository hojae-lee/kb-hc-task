import { useMutation } from '@tanstack/react-query'

import { signIn } from '@/api/sign-in'

export const useSignIn = () => {
  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      console.log('signIn success', data)
    },
    onError: (error) => {
      console.error('signIn error', error)
    }
  })
}

export default useSignIn
