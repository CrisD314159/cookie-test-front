import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import Guardian from './Guardian'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const provider = new QueryClient()


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={provider}>
      <BrowserRouter>
        <Guardian/>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
