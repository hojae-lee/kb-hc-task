import { apiClient } from '@api/config'

export const get = async <T>(url: string, params?: T) => {
  try {
    const response = await apiClient.get(url, { params })
    return response.data
  } catch (error) {
    console.error('GET request failed:', error)
    throw error
  }
}

export const post = async <T>(
  url: string,
  data?: T,
  config?: { headers?: Record<string, string> }
) => {
  try {
    const response = await apiClient.post(url, data, config)
    return response.data
  } catch (error) {
    console.error('POST request failed:', error)
    throw error
  }
}

export const put = async <T>(url: string, data?: T) => {
  try {
    const response = await apiClient.put(url, data)
    return response.data
  } catch (error) {
    console.error('PUT request failed:', error)
    throw error
  }
}

export const del = async <T>(url: string, params?: T) => {
  try {
    const response = await apiClient.delete(url, { params })
    return response.data
  } catch (error) {
    console.error('DELETE request failed:', error)
    throw error
  }
}
