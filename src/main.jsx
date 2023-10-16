import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddCoffee from './cpmponent/AddCoffee';
import UpdateCoffee from './cpmponent/UpdateCoffee';
import Login from './cpmponent/login/Login/SingIn';
import SignUp from './cpmponent/login/SignUp/SignUp';
import AuthProvider from './cpmponent/provider/AuthProvider';
import Users from './cpmponent/users/Users';
import Main from './cpmponent/main/Main';
import Error from './cpmponent/Error';
const router = createBrowserRouter([

  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch('https://coffee-store-sever-bhan2mssx-md-minar-babus-projects.vercel.app/coffee')
      },
      {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "users",
        element: <Users></Users>,
        loader: () => fetch('https://coffee-store-sever-bhan2mssx-md-minar-babus-projects.vercel.app/users')
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffee-store-sever-bhan2mssx-md-minar-babus-projects.vercel.app/coffee/${params.id}`)
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
