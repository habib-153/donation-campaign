import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import './Component/Home/Banner.css'
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Donation from './Component/Donation/Donation';
import Statistics from './Component/Statistics/Statistics';
import CardDetails from './Component/Home/CardDetails/CardDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element: <div>
          <Home></Home>
          </div>
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('/data.json')
      },
      {
        path:'/card/:id',
        element: <CardDetails></CardDetails>,
        loader: () => fetch('/data.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
