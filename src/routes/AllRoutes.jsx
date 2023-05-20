import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Layouts/Home/Home";
import Login from "../Layouts/Login/Login";
import Signup from "../Layouts/Signup/Signup";

const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default AllRoutes;
