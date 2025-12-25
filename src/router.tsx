import { createBrowserRouter, Outlet } from 'react-router'

import Layout from '@app/layout'
import NotFound from '@app/not-found'
import { ProtectedRouteProvider } from '@provider/ProtectedRouteProvider'
import { AuthErrorHandlerProvider } from '@provider/AuthErrorHanlderProvider'

// 각 도메인별 라우터 import
import { dashboardRoutes } from '@app/dashboard/router'
import { taskRoutes } from '@app/task/router'
import { userRoutes } from '@app/user/router'
import { signInRoute } from '@app/sign-in/router'

export const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRouteProvider>
          <AuthErrorHandlerProvider />
          <Layout>
            <Outlet />
          </Layout>
        </ProtectedRouteProvider>
      ),
      errorElement: <NotFound />,
      children: [...dashboardRoutes, ...taskRoutes, ...userRoutes]
    },
    // 라우터 가드가 필요없는 페이지
    ...signInRoute,
    {
      path: '*',
      element: <NotFound />
    }
  ])
}
