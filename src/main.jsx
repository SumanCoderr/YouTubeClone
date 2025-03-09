import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './Components/NotFound.jsx'
import RegistrationForm from './Components/RegistrationForm.jsx'
import Home from './Pages/Home.jsx'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element : <App/>,
    errorElement: <NotFound/>,
    children: [
      {
        path : "/",
        element:  <Home/>
      },
      {
        path: "/login",
        element: <RegistrationForm/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={appRouter}/>
  </StrictMode>,
)
