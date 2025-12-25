import { delay, http, HttpResponse } from 'msw'

import { API_URL } from '@api/task'
import { verifyToken } from '@mocks/utils'
import { tasks } from '@mocks/task/db'

const ITEMS_PER_PAGE = 10

export const taskHandlers = [
  http.get(API_URL, async ({ request }) => {
    await delay(500)
    const authHeader = request.headers.get('authorization')

    if (!verifyToken(authHeader)) {
      return HttpResponse.json(
        { errorMessage: '인증이 필요합니다.' },
        { status: 401 }
      )
    }

    const url = new URL(request.url)
    const pageParam = url.searchParams.get('page')
    const page = pageParam ? parseInt(pageParam, 10) : 1

    // page가 음수이거나 0 이하인 경우 400 에러
    if (page < 1 || isNaN(page)) {
      return HttpResponse.json(
        { errorMessage: '잘못된 페이지 번호입니다.' },
        { status: 400 }
      )
    }

    const startIndex = (page - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    const paginatedTasks = tasks.slice(startIndex, endIndex)

    return HttpResponse.json(paginatedTasks)
  }),

  http.get(`${API_URL}/:id`, async ({ request, params }) => {
    await delay(100)
    const authHeader = request.headers.get('authorization')

    if (!verifyToken(authHeader)) {
      return HttpResponse.json(
        { errorMessage: '인증이 필요합니다.' },
        { status: 401 }
      )
    }

    const id = params.id

    const task = tasks.find((task) => task.id === id)

    if (!task) {
      return HttpResponse.json(
        { errorMessage: '할 일을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    return HttpResponse.json({
      id: task.id,
      title: task.title,
      memo: task.memo,
      registerDatetime: new Date().toISOString()
    })
  })
]
