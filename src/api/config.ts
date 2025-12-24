import axios from 'axios'

export const apiClient = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000
})

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
      if (refreshToken) {
        try {
          const response = await apiClient.post('/api/refresh', null, {
            headers: { Authorization: `Bearer ${refreshToken}` }
          })

          const { accessToken, refreshToken: newRefreshToken } = response.data
          tokenStorage.setAccessToken(accessToken)
          tokenStorage.setRefreshToken(newRefreshToken)

          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`
          return apiClient(originalRequest)
        } catch (refreshError) {
          // 에러 발생시 토큰 클리어 및 인증 에러 구분용 인자 throw
          tokenStorage.clearTokens()
          return Promise.reject({
            ...(refreshError as Error),
            isAuthError: true
          })
        }
      } else {
        tokenStorage.clearTokens()
        return Promise.reject({
          ...error,
          isAuthError: true
        })
      }
    }

    return Promise.reject(error)
  }
)
