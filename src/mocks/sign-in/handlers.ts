import { http, HttpResponse, delay } from 'msw'
import { API_URL } from '@/api/sign-in'
import { SignInRequest } from '@/api/sign-in/schema'

export const signInHandlers = [
  http.post(API_URL, async ({ request }) => {
    await delay(1000)

    const body = (await request.json()) as SignInRequest
    const { email, password } = body

    if (email !== 'test@test.com' && password !== '1q2w3e4r') {
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
  })
]
