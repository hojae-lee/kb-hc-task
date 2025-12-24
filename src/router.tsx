// src/router.tsx
import { createBrowserRouter, Outlet } from 'react-router'

import Layout from '@/app/layout'
import NotFound from '@/app/not-found'
import { SuspenseProvider } from '@provider/SuspenseProvider'

// root 페이지
import { root } from '@app/router'

// 각 도메인별 라우터 import
import { dashboardRoutes } from '@app/dashboard/router'
import { taskRoutes } from '@app/task/router'
import { userRoutes } from '@app/user/router'
import { signInRoute } from '@app/auth/sign-in/router'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <SuspenseProvider>
          <Outlet />
        </SuspenseProvider>
      </Layout>
    ),
    errorElement: <NotFound />,
    children: [...root, ...dashboardRoutes, ...taskRoutes, ...userRoutes]
  },
  ...signInRoute,
  {
    path: '*',
    element: <NotFound />
  }
])

export default router
