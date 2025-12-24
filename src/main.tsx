import { createRoot } from 'react-dom/client'

import { AppProvider } from '@/provider/AppProvider'

import '@/assets/styles/index.css'

createRoot(document.getElementById('root')!).render(<AppProvider />)
