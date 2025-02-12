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
function App() {
  const routes=createBrowserRouter([
    {path:"",element:<LayOut/>,children:[
      {path:"home",element:<Home/>},
      // {path:"about",element:<About/>},
      {path:"contect",element:<Contect/>},
      {path:"category",element:<Category/> ,children:[
        {path:'',element:<Electronics/>},
        {path:'jewelery',element:<Jewelery/>},
        {path:'men',element:<MenClothing/>},
        {path:'women',element:<WomenClothing/>},
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
  

  // async function AllProduct() {
  //   let {data}=await axios.get(`https://fakestoreapi.com/products`)
  //   console.log(data);
    
  // }

  // useEffect(()=>{
  //   AllProduct()
  // },[])

  return (
   <>
      <RouterProvider router={routes}></RouterProvider>
       
   </>
  )
}

export default App
