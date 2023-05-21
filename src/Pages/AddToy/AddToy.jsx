import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const photoURL = form.photoURL.value;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const sub_category = form.sub_category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const userToy = {
      photoURL,
      toyName,
      sellerName,
      sellerEmail,
      sub_category,
      price,
      rating,
      quantity,
      details,
    };
    console.log(userToy);
    fetch("http://localhost:5000/usertoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userToy),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div className="my-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-full lg:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold mb-10 text-center">
              Add Your Toy
            </h1>
            <img
              className="w-3/4 mx-auto"
              src="https://i.ytimg.com/vi/GUpXx1A4ypI/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="card w-full lg:w-1/2 shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="text-3xl font-bold mb-5 text-center">
                Add Toy Details
              </h2>
              <form onSubmit={handleAddToy}>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Toy Picture</span>
                    </label>
                    <input
                      type="url"
                      placeholder="Toy Photo URL"
                      className="input input-bordered"
                      name="photoURL"
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Toy Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Toy Name"
                      className="input input-bordered"
                      name="toyName"
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Seller Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="seller name"
                      className="input input-bordered"
                      name="sellerName"
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Seller Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="seller email"
                      className="input input-bordered"
                      value={user.email}
                      name="sellerEmail"
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Category</span>
                    </label>
                    <select
                      className="select w-full max-w-xs input input-bordered"
                      name="sub_category"
                    >
                      <option disabled selected>
                        Select Category
                      </option>
                      <option>Racing Car</option>
                      <option>Medical Vehicle</option>
                      <option>Remote Car</option>
                      <option>Electric Car</option>
                    </select>
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="number"
                      placeholder="price"
                      className="input input-bordered"
                      name="price"
                      min={5}
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <input
                      type="number"
                      placeholder="rating"
                      className="input input-bordered"
                      name="rating"
                      min={1}
                      max={5}
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Quantity</span>
                    </label>
                    <input
                      type="number"
                      placeholder="quantity"
                      className="input input-bordered"
                      name="quantity"
                      min={1}
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <input
                    type="textarea"
                    placeholder="toy details"
                    className="textarea textarea-bordered"
                    name="details"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-error">Add Toy</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
