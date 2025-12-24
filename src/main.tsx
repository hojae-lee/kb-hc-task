import { createRoot } from 'react-dom/client'

import { AppProvider } from '@/provider/AppProvider'
import { enableMocking } from '@mocks/service'

import '@/assets/styles/index.css'

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(<AppProvider />)
})
