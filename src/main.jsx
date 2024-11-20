import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {createBrowserRouter,Navigate,RouterProvider,} from "react-router-dom";
import MainLayOut from './Components/MainLayout/MainLayOut';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Tutorials from './Pages/Tutorials';
import ErrorPage from './../ErrorPage.jsx/ErrorPage';
import ViewDetails from './Components/cards/ViewDetails';
import Login from './Components/Login/Login';
import AuthProvider from './Components/AuthProvider';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute';
import StartLearning from './Components/StartLearning/StartLearning';
import Lesson1 from './Components/StartLearning/LessonAll/Lesson1';
import Lesson2 from './Components/StartLearning/LessonAll/Lesson2';
import Lesson3 from './Components/StartLearning/LessonAll/Lesson3';
import LessonsCard from './Components/LessonsPage/LessonsCard';
import UpdateProfile from './Components/UpdateProfile';
import AboutUs from './Pages/AboutUs';

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
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>,
        
      },
       {
        path: "/about",
        element: <AboutUs></AboutUs>,
        
      },
      {
        path: "/learning",
        element: <StartLearning></StartLearning>,
        
         
        
      },
      {
        path: "/tutorials",
        element: <PrivateRoute>
          <Tutorials></Tutorials>
        </PrivateRoute>,
        
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
     
      {
        path: "/lesson1",
        element: <PrivateRoute><Lesson1></Lesson1>
        </PrivateRoute>,
        
      },
      {
        path: "/lesson2",
        element: <PrivateRoute><Lesson2></Lesson2>
        </PrivateRoute>,
        
      },
      {
        path: "/lesson3",
        element: <PrivateRoute><Lesson3></Lesson3>
        </PrivateRoute>,
        
      },
     
      {
        path: "/lessons",
        element: <PrivateRoute>
          <LessonsCard></LessonsCard>
        </PrivateRoute>,
      },
   
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
  
    
     
     
    ],
    
  },
 
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
  </StrictMode>,
)
