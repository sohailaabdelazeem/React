import { useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './component/Layout/LayOut'
import Home from './component/Home/Home'
import About from './component/About/About'
import Contect from './component/Contect/Contect'
import Category from './component/Category/Category'
import NotFound from './component/NotFound/NotFound'
import Setting from './component/Setting/Setting'
import Electronics from './component/Electronics/Electronics'
import Jewelery from './component/Jewelery/Jewelery'
import MenClothing from './component/MenClothing/MenClothing'
import WomenClothing from './component/WomenClothing/WomenClothing'
import Register from './component/Register/register'
import Login from './component/Login/Login'
import axios from 'axios'
import ProtectRoute from './component/ProtectRoute/ProtectRoute'
import ProductDetails from './component/ProductDetails/ProductDetails'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'


function App() {
  const routes=createBrowserRouter([
    {path:"",element:<LayOut/>,children:[
      {path:"home",element: <ProtectRoute><Home/></ProtectRoute>  },
      // {path:"about",element:<About/>},
      {path:"contect",element: <ProtectRoute> <Contect/>  </ProtectRoute>  },

      {path:"product-details/:id",element: <ProtectRoute> <ProductDetails/>  </ProtectRoute>  },

      {path:"category",element:<ProtectRoute> <Category/>   </ProtectRoute>  ,children:[
        {path:'',element:<ProtectRoute><Electronics/>  </ProtectRoute>},
        {path:'jewelery',element: <ProtectRoute><Jewelery/>  </ProtectRoute>},
        {path:'men',element:<ProtectRoute> <MenClothing/>   </ProtectRoute>},
        {path:'women',element: <ProtectRoute> <WomenClothing/>  </ProtectRoute>},
      ]},

      {path:'register',element:<Register/>},
      {path:'login',element:<Login/>},
      // {path:'setting',element:<Setting/>,children:[
      //   {path:'',element:<Electronics/>},
      //   {path:'jewelery',element:<Jewelery/>},
      //   {path:'men',element:<MenClothing/>},
      //   {path:'women',element:<WomenClothing/>},
      // ]},
      {path:"*",element:<NotFound/>}
    ]}
  ])

  return (
   <>
       <ToastContainer />
      <RouterProvider router={routes}></RouterProvider>
       
   </>
  )
}

export default App
