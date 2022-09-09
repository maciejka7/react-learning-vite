import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { RouterProvider } from './RouterProvider'
import { Routes } from './Routes'

export const queryClientConfig = {
  logger: {
    log: console.log,
    warn: console.warn,
    // ✅ no more errors on the console for tests
    // error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
    error: null
  },
}

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider>
        <Routes />
      </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
