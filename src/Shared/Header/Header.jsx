import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.png";

const Header = () => {
  return (
    <>
      {/* TOP BAR STARTS */}
      <div className="navbar bg-base-300 h-10 p-3">
        <p className="mx-auto">
          Get 35% off for
          <Link>
            <p className="hover:text-red-500 transition duration-150 ease-out hover:ease-in underline mx-1">
              Summer Collection
            </p>
          </Link>
          - 2023
        </p>
      </div>
      {/* TOP BAR ENDS */}

      {/* Navbar Starts */}
      <div className="navbar bg-base-100 p-5 drop-shadow">
        <div className="flex-1">
          <Link to={"/"}>
            <div className="flex items-center">
              <img className="w-20 h-20" src={logo} alt="site-logo" />
              <p className="text-2xl font-bold ">toySTAR</p>
            </div>
          </Link>
        </div>
        <div className="flex">
          <div className="flex-none mr-5">
            <ul className="flex items-center gap-4  px-1">
              <li className="text-xl hover:text-red-500 transition duration-150 ease-out hover:ease-in">
                <Link>
                  <p>Home</p>
                </Link>
              </li>
              <li className="text-xl hover:text-red-500 transition duration-150 ease-out hover:ease-in">
                <Link>
                  <p>All Toys</p>
                </Link>
              </li>
              <li className="text-xl hover:text-red-500 transition duration-150 ease-out hover:ease-in">
                <Link>
                  <p>My Toys</p>
                </Link>
              </li>
              <li className="text-xl hover:text-red-500 transition duration-150 ease-out hover:ease-in">
                <Link>
                  <p>Add A Toy</p>
                </Link>
              </li>
              <li className="text-xl hover:text-red-500 transition duration-150 ease-out hover:ease-in">
                <Link>
                  <p>Blogs</p>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <img
              className="w-10 h-10"
              src="https://i.ibb.co/Yhn8Q8H/user.png"
              alt="user-picture"
            />
          </div>
        </div>
      </div>
      {/* Navbar Ends */}
    </>
  );
};

export default Header;
