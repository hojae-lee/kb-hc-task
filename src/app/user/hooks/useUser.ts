import { useSuspenseQuery } from '@tanstack/react-query'
import { getUser, userKeys } from '@api/user'

export const useGetUser = () => {
  return useSuspenseQuery({
    queryKey: [...userKeys.all],
    queryFn: getUser
  })
}

