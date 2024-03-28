import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';

import App from "./App.jsx";
import AddProduct from "./components/AddProduct.jsx";
import Products from "./components/Products.jsx";
import UpdateProduct from "./components/UpdateProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Products/>,
      },
      {
        path: "/addProducts",
        element: <AddProduct/>,
      },

      {
        path: "/updateProducts/:id",
        element: <UpdateProduct/>,
      },
      {
        path: "/profile",
        element: <h1>Profile</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
          <RouterProvider router={router} />
        </ErrorBoundary>
  </React.StrictMode>
);
