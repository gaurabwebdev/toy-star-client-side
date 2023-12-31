import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../Pages/AllToys/AllToys";
import SingleToys from "../Pages/SingleToy/SingleToys";
import Blogs from "../Pages/Blogs/Blogs";
import SingleBlog from "../Pages/Blogs/SingleBlog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

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
        path: "/alltoys",
        element: <AllToys />,
      },
      {
        path: "/alltoys/:id",
        element: (
          <PrivateRoute>
            <SingleToys></SingleToys>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://khelaghor-server-site.vercel.app/alltoys/${params.id}`
          ),
      },
      {
        path: "/usertoys/:id",
        element: (
          <PrivateRoute>
            <SingleToys />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://khelaghor-server-site.vercel.app/usertoys/${params.id}`
          ),
      },

      {
        path: "/addtoy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch("https://khelaghor-server-site.vercel.app/blogs"),
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
        loader: ({ params }) =>
          fetch(`https://khelaghor-server-site.vercel.app/blogs/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default AllRoutes;
