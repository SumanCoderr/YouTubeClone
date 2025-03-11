import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './Components/NotFound.jsx'
import Home from './Pages/Home.jsx'
import Login from './Components/Login.jsx'
import SignIp from './Components/SignIn.jsx'
import VideoPage from './Pages/VideoPage.jsx'
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
        path:"/:id",
        element: <VideoPage/>
      },
      {
        path:"/channel/:id",
        element: <ChannelPage/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/signin",
        element:<SignIp/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={appRouter}/>
  </StrictMode>,
)
