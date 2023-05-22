import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={AllRoutes}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
