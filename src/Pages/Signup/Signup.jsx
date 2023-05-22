import React from "react";
import SignUpForm from "./SignUpForm";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Signup = () => {
  return (
    <div>
      <PageTitle />
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
