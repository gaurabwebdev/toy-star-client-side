import React from "react";
import { ToastContainer, toast } from "react-toastify";

const ContactSection = () => {
  const handleContact = (e) => {
    e.preventDefault();
    const form = e.target;
    form.reset();
    toast("We have received your message, Will Reply You Asap!");
  };
  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold text-center mt-20">
          Contact With Us{" "}
        </h1>
      </div>
      <div>
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-left w-full md:w-1/2">
            <h1 className="text-4xl font-bold">Let's Hear From You</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100 m-5">
            <form onSubmit={handleContact} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  required
                  className=" border-2 border-gray-300 rounded focus:outline outline-offset-2 outline-1 outline-gray-300"
                  name="message"
                  cols="30"
                  rows="7"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-error">Send</button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
