import { RouterProvider } from 'react-router'

import { createRouter } from '@/router'

export const ReactRouterProvider = () => {
  const router = createRouter()

  return <RouterProvider router={router} />
}
