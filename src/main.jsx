import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main/Main.jsx';
import Home from './components/Home/Home';
import ChefDetails from './components/ChefDetails/ChefDetails';
import ChefProvider from './ChefProviders/ChefProvider';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Error from './components/Error/Error';
import NotFound from './components/NotFound/NotFound';
import Profile from './components/Profile/Profile';
import Blog from './components/Blog/Blog';
import Services from './components/Services/Services';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'chef-details/:id',
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'login',
        element:<Login></Login>
      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: "*",
        element: <NotFound></NotFound>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChefProvider>
      <RouterProvider router={router} />
    </ChefProvider>
  </React.StrictMode>,
)
