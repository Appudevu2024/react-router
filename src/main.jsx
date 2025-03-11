import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ProductDetails from './components/ProductDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails/>,
      },
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />
)
