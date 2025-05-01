import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { router } from './App.tsx'
import { RouterProvider } from 'react-router-dom'

import AuthProvider from './contexts/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
