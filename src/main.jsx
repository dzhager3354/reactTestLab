import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Catalog } from './Catalog.jsx'
import { ProductDetails } from './ProductDetails.jsx'
import Cart from './Cart.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Catalog />
      },
      {
        path: "/product/:id",
        element: <ProductDetails />
      }, 
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
