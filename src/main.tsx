import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createMachine } from 'xstate'
import App from './App'
import './index.css'
import { QuizAppPage } from './pages/quizApp/quizApp'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="project/quiz-app" element={<QuizAppPage />} />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
