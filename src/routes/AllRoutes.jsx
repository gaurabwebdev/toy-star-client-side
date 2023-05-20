import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AddToy from "../Pages/AddToy/AddToy";

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
      {
        path: "/addtoy",
        element: <AddToy />,
      },
    ],
  },
]);

export default AllRoutes;
