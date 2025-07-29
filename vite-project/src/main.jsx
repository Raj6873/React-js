import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Hello from './hello.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hello />
  </StrictMode>,
)
