import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import  from 
// import  from 
// import  from 
// import  from 
// import  from 
// import  from 


// Lazy Loading

const Home = lazy(() => import('./Pages/Home.jsx'))
const Login = lazy(() => import('./Components/Login.jsx'))
const SignIp = lazy(() => import('./Components/SignIn.jsx'))
const VideoPage = lazy(() => import('./Pages/VideoPage.jsx'))
const ChannelPage = lazy(() => import('./Pages/ChannelPage.jsx'))
const NotFound = lazy(() => import('./Components/NotFound.jsx'))


const appRouter = createBrowserRouter([
  {
    path:"/",
    element : <App/>,
    errorElement: <Suspense fallback ={<div>Loading...</div>}><NotFound/></Suspense>,
    children: [
      {
        path : "/",
        element:  (<Suspense fallback ={<div>Loading...</div>}><Home/></Suspense>)
      },
      {
        path:"/watch/:id",
        element: (<Suspense fallback ={<div>Loading...</div>}><VideoPage/></Suspense>)
      },
      {
        path:"/channel/:id",
        element: (<Suspense fallback ={<div>Loading...</div>}><ChannelPage/></Suspense>)
      },
      {
        path: "/login",
        element: (<Suspense fallback ={<div>Loading...</div>}><Login/></Suspense>)
      },
      {
        path: "/signin",
        element: (<Suspense fallback ={<div>Loading...</div>}><SignIp/></Suspense>)
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={appRouter}/>
  </StrictMode>,
)
