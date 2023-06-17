import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './components/Home';
import Resturent from './components/Resturent';
import About from './components/About';
import FoodDetails from './components/FoodDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/resturent",
        element:<Resturent></Resturent>,
        loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken'),
      },
      {
        path:"/food/:id",
        element:<FoodDetails></FoodDetails>,
        
      },
      {
        path:"/about",
        element:<About></About>
      }
    ],

  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
