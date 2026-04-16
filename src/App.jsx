import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Layout from './Components/Layout/Layout'
import Movie from './Components/Movie/Movie'
import Tv from './Components/TV/Tv'
import Actor from './Components/Actor/Actor'
import Error from './Error/Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


export default function App() {
  let routs = createBrowserRouter([{
    path:'',element:<Layout/>,children:[
      {path:"/", element:<Movie/>},
      {path:"/movie", element:<Movie/>},
      {path:"/tv", element:<Tv/>},
      {path:"/actor", element:<Actor/>},
      {path:"*", element:<Error/>},
    
    ]
  }])
  createBrowserRouter
  return <RouterProvider router={routs}/>
}
