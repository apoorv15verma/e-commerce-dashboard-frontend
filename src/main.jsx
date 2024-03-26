import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <h1>Products</h1>,
      },
      {
        path: "/addProducts",
        element: <h1>Add Products</h1>,
      },

      {
        path: "/apdateProducts",
        element: <h1>Update Products</h1>,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
