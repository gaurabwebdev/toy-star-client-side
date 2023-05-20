import React from "react";
import SignUpForm from "./SignUpForm";

const Signup = () => {
  return (
    <div>
      <div className="flex justify-center px-5 py-8">
        <div className="card bg-base-100 shadow-xl my-10 w-full md:w-1/2">
          <div className="card-body items-center text-center">
            <SignUpForm></SignUpForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
