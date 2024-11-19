import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {createBrowserRouter,Navigate,RouterProvider,} from "react-router-dom";
import MainLayOut from './Components/MainLayout/MainLayOut';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import StartLearning from './Pages/StartLearning';
import Tutorials from './Pages/Tutorials';
import ErrorPage from './../ErrorPage.jsx/ErrorPage';
import ViewDetails from './Components/cards/ViewDetails';
import Login from './Components/Login/Login';
import AuthProvider from './Components/AuthProvider';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute';










const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        
         
            
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
        
      },
       {
        path: "/about",
        element: <About></About>,
        
      },
      {
        path: "/learning",
        element: <StartLearning></StartLearning>,
        
      },
      {
        path: "/tutorials",
        element: <Tutorials></Tutorials>,
        
      },
      {
        path: "/details/:id",
        element: <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>,
        loader:async({params})=>{
          const res=await fetch('/japanese_data.json')
          const data=await res.json()
 
          const singleData=data.find(d=>d.id==params.id)
          console.log(singleData);
          return singleData
        
        },
        
      },
      {
        path: "/login",
        element: <Login></Login>,
        
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
     
     
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
  </StrictMode>,
)
