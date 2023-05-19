import React from "react";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-184px-376px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
