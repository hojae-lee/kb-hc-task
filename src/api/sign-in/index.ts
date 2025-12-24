import { post } from '@api/http'
import type { SignInRequest, SignInResponse } from '@/api/sign-in/schema'

// api url
export const API_URL = '/api/sign-in'
export const REFRESH_API_URL = '/api/refresh'

// react query keys
export const authKeys = {
  all: ['auth'] as const,
  signIn: () => [...authKeys.all, 'sign-in'] as const,
  refresh: () => [...authKeys.all, 'refresh'] as const
}

// fetcher
export const signIn = async (data: SignInRequest): Promise<SignInResponse> => {
  return (await post(API_URL, data)) as SignInResponse
}

export const refresh = async (
  refreshToken: string
): Promise<SignInResponse> => {
  return (await post(REFRESH_API_URL, null, {
    headers: { Authorization: `Bearer ${refreshToken}` }
  })) as SignInResponse
}
