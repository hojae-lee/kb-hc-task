import { signInHandlers } from '@mocks/sign-in/handlers'
import { dashboardHandlers } from '@mocks/dashboard/handlers'
import { userHandlers } from '@mocks/user/handlers'

export const handlers = [
  ...signInHandlers,
  ...dashboardHandlers,
  ...userHandlers
]
