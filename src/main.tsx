import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";
import { AppInsightsContext } from '@microsoft/applicationinsights-react-js';
import { UsersList } from './users/list/UsersList';
import { AddUser } from './users/add/AddUser'
import { reactPlugin } from './ApplicationInsightsService';

import './index.css'

const router = createMemoryRouter([
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
    <div className="container mx-auto py-20">
    <AppInsightsContext.Provider value={reactPlugin}>
      <RouterProvider router={router} />
    </AppInsightsContext.Provider>
    </div>
  </React.StrictMode>,
)
