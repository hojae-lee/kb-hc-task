import { delay, http, HttpResponse } from 'msw'

import { API_URL } from '@api/dashboard'
import { verifyToken } from '@mocks/utils'

export const dashboardHandlers = [
  http.get(API_URL, async ({ request }) => {
    delay(500)
    const authHeader = request.headers.get('authorization')

    if (!verifyToken(authHeader)) {
      return HttpResponse.json(
        { errorMessage: '인증이 필요합니다.' },
        { status: 401 }
      )
    }

    return HttpResponse.json({
      numOfTask: 10,
      numOfRestTask: 7,
      numOfDoneTask: 3
    })
  })
]
