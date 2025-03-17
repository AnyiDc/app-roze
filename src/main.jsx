import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoze from '../AppRoze'
import Login from './pages/Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppRoze /> */}
    <Login />
  </StrictMode>,
)
