import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayOut from './Components/MainLayout/MainLayOut';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Tutorials from './Pages/Tutorials';


import Login from './Components/Login/Login';
import AuthProvider from './Components/AuthProvider';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute';
import StartLearning from './Components/StartLearning/StartLearning';


import UpdateProfile from './Components/UpdateProfile';
import AboutUs from './Pages/AboutUs';
import CardProducts from './Components/special/CardProducts';

import ErrorPage from './../ErrorPage.jsx/ErrorPage';
import Lesson from './Components/special/Lesson';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/learning",
        element: <StartLearning />,
        loader: () => fetch('/categories.json'),
        children: [
          {
            path: ":category", 
            element: <CardProducts />,
            loader: () => fetch('/product.json'),
          },
          {
            index: true, 
            element: <CardProducts />,
            loader: () => fetch('/product.json'),
          },
        ],
      },
      {
        path: "/tutorials",
        element: (
          <PrivateRoute>
            <Tutorials />
          </PrivateRoute>
        ),
      },
     
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
     
      {
        path: "/updateProfile",
        element: <UpdateProfile />,
      },
      
      {
        path: "/lessons",
        element: <Lesson/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
