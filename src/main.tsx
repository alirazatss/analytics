import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { UsersList } from './users/list/UsersList';
import { AddUser } from './users/add/AddUser'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersList />,
  },
  {
    path: "/user/add",
    element: <AddUser />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
