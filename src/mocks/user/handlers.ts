import { delay, http, HttpResponse } from 'msw'

import { API_URL } from '@api/user'
import { verifyToken } from '@mocks/utils'

export const userHandlers = [
  http.get(API_URL, async ({ request }) => {
    await delay(500)

    const authHeader = request.headers.get('authorization')

    if (!verifyToken(authHeader)) {
      return HttpResponse.json(
        { errorMessage: '인증이 필요합니다.' },
        { status: 401 }
      )
    }

    return HttpResponse.json({
      name: '홍길동',
      memo: '할 일 관리 시스템을 사용하고 있습니다.'
    })
  })
]
