import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div>
      <div className="flex justify-center px-5 py-8">
        <div className="card bg-base-100 shadow-xl my-10">
          <div className="card-body items-center text-center">
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
