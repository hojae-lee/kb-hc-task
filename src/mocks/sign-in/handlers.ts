import { http, HttpResponse, delay } from 'msw'

import { API_URL, REFRESH_API_URL } from '@api/sign-in'
import { SignInRequest } from '@api/sign-in/schema'

export const signInHandlers = [
  http.post(API_URL, async ({ request }) => {
    await delay(1000)

    const body = (await request.json()) as SignInRequest
    const { email, password } = body

    if (
      email !== import.meta.env.VITE_USER_EMAIL ||
      password !== import.meta.env.VITE_USER_PASSWORD
    ) {
      return HttpResponse.json(
        {
          errorMessage: '계정 정보가 일치하지 않습니다.'
        },
        { status: 400 }
      )
    }

    return HttpResponse.json({
      accessToken: 'a1234567890',
      refreshToken: '11112222333344445555666677778888'
    })
  }),

  http.post(REFRESH_API_URL, async ({ request }) => {
    await delay(500)

    const authHeader = request.headers.get('authorization')
    const refreshToken = authHeader?.replace('Bearer ', '')

    if (!refreshToken || refreshToken !== '11112222333344445555666677778888') {
      return HttpResponse.json(
        {
          errorMessage: '유효하지 않은 refresh token입니다.'
        },
        { status: 400 }
      )
    }

    return HttpResponse.json({
      accessToken: 'a1234567890',
      refreshToken: '11112222333344445555666677778888'
    })
  })
]
