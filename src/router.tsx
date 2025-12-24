import { createBrowserRouter, Outlet } from 'react-router'

import Layout from '@/app/layout'
import NotFound from '@/app/not-found'

import root from '@/app/router'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [root],
    errorElement: <NotFound />
  }
])

export default router
