import { lazy, Suspense, useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './component/Layout/LayOut'
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
 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import { Offline, Online } from "react-detect-offline";


function App() {
  const Home=lazy(()=>import ("./component/Home/Home"))
  const About=lazy(()=>import ("./component/About/About"))
  const Contect=lazy(()=>import ("./component/Contect/Contect"))
  const ProductDetails=lazy(()=>import ("./component/ProductDetails/ProductDetails"))

  const routes=createBrowserRouter([
    {path:"",element:<LayOut/>,children:[
      {path:"home",element: <Suspense><ProtectRoute><Home/></ProtectRoute></Suspense>  },
      {path:"about",element: <Suspense><ProtectRoute><About/></ProtectRoute></Suspense>  },
      {path:"contect",element: <Suspense> <ProtectRoute> <Contect/> </ProtectRoute></Suspense>  },
      {path:"product-details/:id",element: <Suspense><ProtectRoute><ProductDetails/></ProtectRoute></Suspense>  },
     

      {path:"category",element:<ProtectRoute> <Category/>   </ProtectRoute> ,children:[
        {path:'',element:<ProtectRoute><Electronics/>  </ProtectRoute>},
        {path:'jewelery',element: <ProtectRoute><Jewelery/>  </ProtectRoute>},
        {path:'men',element:<ProtectRoute> <MenClothing/>   </ProtectRoute>},
        {path:'women',element: <ProtectRoute> <WomenClothing/>  </ProtectRoute>},
      ]},

      {path:'register',element:<Register/>},
      {path:'login',element:<Login/>},
      
      {path:"*",element:<NotFound/>}
    ]}
  ])

  return (
   <>
       <ToastContainer />
      <RouterProvider router={routes}></RouterProvider>
      <Online><h2 className='notification'>Only shown when you're online</h2></Online>
      <Offline><h2 className='Notnotification'>Only shown offline (surprise!)</h2></Offline>
   </>
  )
}

export default App
