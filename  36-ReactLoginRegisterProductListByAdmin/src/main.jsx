import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./assets/pages/Register.jsx";
import Login from "./assets/pages/Login/Login.jsx";
import Productss from "./assets/pages/Productss/Productss.jsx";
import WishList from "./assets/pages/WishList.jsx";
import Basket from "./assets/pages/Basket/Basket.jsx";

let userWish = JSON.parse(localStorage.getItem("user"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // {
      //   path: "/",
      //   element: <Productss />,
      // },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/wishList",
        element: <WishList />,
      },

      {
        path: "/product",
        element: <Productss />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
