import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { myRoutes } from './Routes/myRoutes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={myRoutes}/>
  </StrictMode>,
)
