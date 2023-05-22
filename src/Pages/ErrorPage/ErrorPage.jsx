import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-5 my-10">
        <img
          className="w-80 "
          src="https://i.ibb.co/8dggtKM/stop.png"
          alt="stop"
        />

        <img
          className="w-48 "
          src="https://i.ibb.co/hBH5Kv9/error-404.png"
          alt="404"
        />
        <h1 className="text-6xl font-bold uppercase">page not found</h1>
        <Link to={"/"}>
          <button className="btn btn-outline">Go Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
