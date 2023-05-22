import React from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h3 className="text-2xl font-semibold m-7">
        HOME <span>{location.pathname?.toUpperCase()}</span>
      </h3>
    </div>
  );
};

export default PageTitle;
