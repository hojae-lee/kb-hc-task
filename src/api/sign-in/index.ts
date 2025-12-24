import { post } from '@api/http'
import type { SignInRequest, SignInResponse } from '@/api/sign-in/schema'

// api url
export const API_URL = '/api/sign-in'

// react query keys
export const authKeys = {
  all: ['auth'] as const,
  signIn: () => [...authKeys.all, 'sign-in'] as const
}

// fetcher
export const signIn = async (data: SignInRequest): Promise<SignInResponse> => {
  return (await post(API_URL, data)) as SignInResponse
}
