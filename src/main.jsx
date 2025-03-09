import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './Components/NotFound.jsx'
import RegistrationForm from './Components/RegistrationForm.jsx'
import Home from './Pages/Home.jsx'
import Video from './Pages/Video.jsx'
import ChannelPage from './Pages/ChannelPage.jsx'

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
        path:"/watch/:id",
        element: <Video/>
      },
      {
        path:"/user/:id",
        element: <ChannelPage/>
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
