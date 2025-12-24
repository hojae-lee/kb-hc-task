import { StateCreator } from 'zustand'

import { tokenStorage } from '@api/config'

export type AuthSlice = {
  isAuthenticated: boolean
  setTokens: (accessToken: string, refreshToken: string) => void
  clearTokens: () => void
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  isAuthenticated: !!(
    tokenStorage.getAccessToken() && tokenStorage.getRefreshToken()
  ),

  setTokens: (accessToken: string, refreshToken: string) => {
    tokenStorage.setAccessToken(accessToken)
    tokenStorage.setRefreshToken(refreshToken)
    set({ isAuthenticated: true })
  },

  clearTokens: () => {
    tokenStorage.clearTokens()
    set({ isAuthenticated: false })
  }
})
