import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content text-xl">
        <div>
          <Link to={"/"}>
            <div className="flex items-center">
              <img className="w-20 h-20" src={logo} alt="site-logo" />
              <p className="text-2xl font-bold  font-Righteous">
                toy<span className="text-red-500">STAR</span>
              </p>
            </div>
          </Link>

          <p className="mx-3 pr-6 ">
            toySTAR is a store that specializes in selling toys and games
            designed specifically for children.
          </p>
          <ul className="">
            <li className="my-3 flex items-center gap-3">
              <img
                className="w-8 h-8"
                src="https://i.ibb.co/JytMDtb/map.png"
                alt="address-icon"
              />
              <p>Addresss: 1800 Abbot Kinney Nebraska UK</p>
            </li>
            <li className="my-3 flex items-center gap-3">
              <img
                className="w-8 h-8"
                src="https://i.ibb.co/RvTYk5T/message.png"
                alt=""
              />
              <p>Email: hello@toystar.com</p>
            </li>
            <li className="my-3 flex items-center gap-3">
              <img
                className="w-8 h-8"
                src="https://i.ibb.co/dgzpBjF/call.png"
                alt=""
              />
              <p>Phone: (012) 345 6789</p>
            </li>
          </ul>
        </div>
        <div>
          <span className="footer-title">Quick Links</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Subscribe Our Newsletter</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your email address"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-error absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div>
          <span className="footer-title">Follow Us</span>
          <div className="grid grid-flow-col gap-4">
            <Link>
              <img
                className="w-8 h-8"
                src="https://i.ibb.co/m5wLy4J/facebook.png"
                alt="social-facebook"
              />
            </Link>
            <Link>
              <img
                className="w-8 h-8"
                src="https://i.ibb.co/Qp2JQR4/twitter.png
"
                alt="social-twitter"
              />
            </Link>
            <Link>
              <img
                className="w-8 h-8"
                src="https://i.ibb.co/FsPyQqB/youtube.png"
                alt="social-youtube"
              />
            </Link>
          </div>
        </div>
      </footer>
      <div className="navbar bg-base-300 h-10 p-3">
        <p className="mx-auto">
          Copyright -
          <Link>
            <span className="text-red-500 font-Righteous mx-1">toySTAR</span>
          </Link>
          2023
        </p>
      </div>
    </>
  );
};

export default Footer;
