import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import SingInPage from './auth/sign-in'
import { RouterProvider } from 'react-router'
import Home from './home'
import Dashboard from './dashboard'

const route = createBrowserRouter([
  {
    element : <App/>,
    children  : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/dashboard',
        element : <Dashboard/>
      }
    ]
  },
  {
    path:'/auth/sing-in',
    element: <SingInPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
