import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import Store from './Store.tsx'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes.tsx'
import { init } from '@telegram-apps/sdk'
import { Toaster } from 'sonner'

init();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="min-h-screen">
      <Provider store={Store}>
        <Toaster />
        <RouterProvider router={Routes} />
      </Provider>
    </div>
  </React.StrictMode>,
)
