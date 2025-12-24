import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { createAuthSlice, type AuthSlice } from '@/store/slices/authSlice'

export type StoreState = AuthSlice

export const useAppStore = create<StoreState>()(
  devtools(
    (...args) => ({
      ...createAuthSlice(...args)
    }),
    {
      name: 'app-store'
    }
  )
)

export default useAppStore
