import { http, HttpResponse } from 'msw'

import { API_URL } from '@api/dashboard'

// 토큰 검증 헬퍼
const verifyToken = (authHeader: string | null): boolean => {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false
  }
  const token = authHeader.replace('Bearer ', '')

  return token.length > 0
}

export const dashboardHandlers = [
  http.get(API_URL, async ({ request }) => {
    const authHeader = request.headers.get('authorization')

    // if (!verifyToken(authHeader)) {
    return HttpResponse.json(
      { errorMessage: '인증이 필요합니다.' },
      { status: 401 }
    )
    // }

    return HttpResponse.json({
      numOfTask: 10,
      numOfRestTask: 7,
      numOfDoneTask: 3
    })
  })
]
