import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Donation from './Components/Donation/Donation.jsx';
import Satistics from './Components/Satistics/Satistics.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import DonationDetails from './Components/DonationDetails/DonationDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      { 
        path: '/donation',
        element: <Donation></Donation>,
        loader: ()=> fetch('/data.json')
      },
      {
        path: '/satistics',
        element: <Satistics></Satistics>
      },
      {
        path: '/category/:id',
        element: <DonationDetails></DonationDetails>,
        loader: ()=> fetch('/data.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
