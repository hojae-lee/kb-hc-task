import axios from 'axios'

import { refresh } from '@api/sign-in'

export const apiClient = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000
})

// 토큰 스토리지 (로컬 스토리지 기반으로 구현)
export const tokenStorage = {
  getAccessToken: () => localStorage.getItem('accessToken'),
  setAccessToken: (token: string) => localStorage.setItem('accessToken', token),
  getRefreshToken: () => localStorage.getItem('refreshToken'),
  setRefreshToken: (token: string) =>
    localStorage.setItem('refreshToken', token),
  clearTokens: () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  }
}

apiClient.interceptors.request.use(
  (config) => {
    const token = tokenStorage.getAccessToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      const refreshToken = tokenStorage.getRefreshToken()
      const { useAppStore } = await import('@/store')

      if (refreshToken) {
        try {
          const response = await refresh(refreshToken)

          const { accessToken, refreshToken: newRefreshToken } = response
          useAppStore.getState().setTokens(accessToken, newRefreshToken)

          // 재호출 시 토큰 갱신
          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`
          return apiClient(originalRequest)
        } catch (refreshError) {
          useAppStore.getState().clearTokens()

          return Promise.reject({
            ...(refreshError as Error),
            isAuthError: true
          })
        }
      } else {
        useAppStore.getState().clearTokens()
        return Promise.reject({
          ...error,
          isAuthError: true
        })
      }
    }

    return Promise.reject(error)
  }
)
