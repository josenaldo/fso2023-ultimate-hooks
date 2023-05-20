import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { NotificationContextProvider } from '@/features/notification'
import App from '@/pages/App'
import '@/styles/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <NotificationContextProvider>
      <Router>
        <App />
      </Router>
    </NotificationContextProvider>
  </React.StrictMode>
)
