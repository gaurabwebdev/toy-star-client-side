import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../public/logo.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {/* TOP BAR STARTS */}
      <div className="navbar bg-base-300 h-10 p-3 flex justify-between">
        <p className="">
          Get 35% off for
          <Link>
            <p className="hover:text-red-500 transition duration-150 ease-out hover:ease-in underline mx-1">
              New Arrivals
            </p>
          </Link>
          - 2023
        </p>
        <div>
          {!user ? (
            <>
              <Link to={"/login"}>
                <button className="btn btn-outline btn-error ">Login</button>
              </Link>
              <Link to={"/signup"}>
                <button className="btn btn-error ml-2 ">Sign Up</button>
              </Link>
            </>
          ) : (
            <button onClick={handleLogout} className="btn btn-error ml-2 ">
              Log Out
            </button>
          )}
        </div>
      </div>
      {/* TOP BAR ENDS */}

      {/* Navbar Starts */}
      <div className="navbar bg-base-100 p-5 drop-shadow">
        <div className="flex-1">
          <Link to={"/"}>
            <div className="flex items-center">
              <img className="w-20 h-20" src={logo} alt="site-logo" />
              <p className="text-2xl font-bold  font-Righteous">
                toy<span className="text-red-500">STAR</span>
              </p>
            </div>
          </Link>
        </div>
        <div className="flex flex-row-reverse lg:flex-row">
          <div className="flex-none lg:mr-5 relative">
            {showMenu ? (
              <>
                <ul className="lg:hidden absolute -top-8 right-0 w-[50vw]  bg-gray-300 flex flex-col items-center gap-4 p-5 rounded">
                  <li className="text-xl hover:text-red-500 transition duration-150 ease-out hover:ease-in">
                    <Link>
                      <p>Home</p>
                    </Link>
                  </li>
                  <li className="text-xl hover:text-red-500 transition duration-150 ease-out hover:ease-in">
                    <Link to={"/alltoys"}>
                      <p>All Toys</p>
                    </Link>
                  </li>
                  {user && (
                    <>
                      <li className="text-xl hover:text-red-500 transition duration-150 ease-out hover:ease-in">
                        <Link to={"/mytoys"}>
                          <p>My Toys</p>
                        </Link>
                      </li>
                      <li className="text-xl hover:text-red-500 transition duration-150 ease-out hover:ease-in">
                        <Link>
                          <p>Add A Toy</p>
                        </Link>
                      </li>
                    </>
                  )}

                  <li className="text-xl hover:text-red-500 transition duration-150 ease-out hover:ease-in">
                    <Link to={"/blogs"}>
                      <p>Blogs</p>
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              <ul className="hidden lg:flex items-center gap-4 px-1">
                <li className="text-xl hover:text-red-500 transition duration-150 ease-out hover:ease-in">
                  <Link>
                    <p>Home</p>
                  </Link>
                </li>
                <li className="text-xl hover:text-red-500 transition duration-150 ease-out hover:ease-in">
                  <Link to={"/alltoys"}>
                    <p>All Toys</p>
                  </Link>
                </li>
                {user && (
                  <>
                    <li className="text-xl hover:text-red-500 transition duration-150 ease-out hover:ease-in">
                      <Link to={"/mytoys"}>
                        <p>My Toys</p>
                      </Link>
                    </li>
                    <li className="text-xl hover:text-red-500 transition duration-150 ease-out hover:ease-in">
                      <Link to={"/addtoy"}>
                        <p>Add A Toy</p>
                      </Link>
                    </li>
                  </>
                )}
                <li className="text-xl hover:text-red-500 transition duration-150 ease-out hover:ease-in">
                  <Link to={"/blogs"}>
                    <p>Blogs</p>
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div className="flex items-center">
            {!showMenu && (
              <div onClick={() => setShowMenu(!showMenu)}>
                <img
                  className="mx-3 lg:hidden w-10 h-10 cursor-pointer"
                  src={`${
                    showMenu
                      ? "https://i.ibb.co/QXbKPFQ/close.png"
                      : "https://i.ibb.co/c3j6zSX/menu.png"
                  }`}
                  alt="bar-icon"
                />
              </div>
            )}
            {user && (
              <div
                data-tip={user?.displayName}
                className="tooltip tooltip-bottom"
              >
                <img
                  className="w-10 h-10 cursor-pointer tooltip rounded-full"
                  src={`${
                    user ? user.photoURL : "https://i.ibb.co/Yhn8Q8H/user.png"
                  }`}
                  alt="user-picture"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Navbar Ends */}
    </div>
  );
};

export default Header;
