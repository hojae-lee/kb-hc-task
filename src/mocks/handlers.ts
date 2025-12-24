import { signInHandlers } from '@mocks/sign-in/handlers'
import { dashboardHandlers } from '@mocks/dashboard/handlers'

export const handlers = [...signInHandlers, ...dashboardHandlers]
