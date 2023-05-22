import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
const LoginForm = () => {
  const navigate = useNavigate();
  const { login, googleSignIn } = useContext(AuthContext);
  const location = useLocation();

  const toTarget = location.state?.from?.pathname || "/";
  if (location.state?.from?.pathname) {
    toast("Please Login First");
  }
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(toTarget);
      })
      .then((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        if (loggedUser) {
          toast("Signed In Successfully!");
        }
        navigate(toTarget);
      })
      .then((error) => console.log(error));
  };
  return (
    <>
      <p className="text-3xl font-semibold">Login ! ! !</p>
      <form onSubmit={handleLogin}>
        <div>
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
          <input className="btn btn-error w-full" type="submit" value="Login" />
        </div>
        <div className="my-3">
          <div className="flex w-full">
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
              <Link to={"/signup"}>
                <span className="duration-150 hover:text-error font-semibold underline">
                  Create An Account
                </span>
              </Link>
            </div>
            <div className="divider divider-horizontal">OR</div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
              <div className="flex items-center gap-3">
                <span className="font-semibold">Login With</span>
                <img
                  onClick={handleGoogleSignIn}
                  className="w-10 h-10 mx-auto my-2 cursor-pointer"
                  src="https://i.ibb.co/pxC49zN/google.png"
                  alt="gooogle"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default LoginForm;
