import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../public/css/app.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
