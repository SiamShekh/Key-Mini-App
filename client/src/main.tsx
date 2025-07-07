import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import Store from './Store.tsx'
import WebApp from '@twa-dev/sdk'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes.tsx'

const isTelegram = WebApp.platform;
const theme = isTelegram === "unknown" ? "" : "dark";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div data-theme={theme} className="min-h-screen">
      <Provider store={Store}>
        <RouterProvider router={Routes} />
      </Provider>
    </div>
  </React.StrictMode>,
)
