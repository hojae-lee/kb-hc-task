import { get } from '@api/http'
import type { UserResponse } from '@api/user/schema'

// api url
export const API_URL = '/api/user'

// react query keys
export const userKeys = {
  all: ['user'] as const,
  detail: () => [...userKeys.all, 'detail'] as const
}

// fetcher
export const getUser = async (): Promise<UserResponse> => {
  return (await get(API_URL)) as UserResponse
}
