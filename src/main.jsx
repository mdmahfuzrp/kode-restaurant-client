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
