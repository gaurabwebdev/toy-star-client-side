import React from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div>
      <p className="text-3xl font-semibold mb-5">Create Account</p>
      <form className="">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered input-error w-full mb-4"
            name="name"
          />
          <input
            type="url"
            placeholder="Your Photo URL"
            className="input input-bordered input-error w-full mb-4"
            name="photo"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered input-error w-full mb-4"
            name="email"
          />
          <input
            type="password"
            placeholder="Your Password"
            className="input input-bordered input-error w-full mb-4"
            name="password"
          />
          <input
            className="btn btn-error w-full"
            type="submit"
            value="Sign UP"
          />
        </div>
        <div className="my-3">
          <div className="flex w-full">
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
              <Link to={"/login"}>
                <span className="duration-150 hover:text-error font-semibold underline">
                  Login To Your Account
                </span>
              </Link>
            </div>
            <div className="divider divider-horizontal">OR</div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
              <div className="flex items-center gap-3">
                <span className="font-semibold">Sign UP With</span>
                <img
                  className="w-10 h-10 mx-auto my-2 cursor-pointer"
                  src="https://i.ibb.co/pxC49zN/google.png"
                  alt="gooogle"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
