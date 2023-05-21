import React from "react";
import { useLocation } from "react-router-dom";

const ToyCard = ({ toyDetails }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="flex flex-col lg:flex-row-reverse my-8 mx-12">
      <div className="w-full lg:w-1/2 lg:m-10">
        <img
          src={toyDetails.photoURL || toyDetails.picture_url}
          className="rounded-lg shadow-2xl mx-auto"
        />
      </div>

      <div className="w-full lg:w-1/2 m-10">
        <h1 className="text-5xl font-bold">
          {toyDetails.toyName || toyDetails.toy_name}
        </h1>
        <p className="py-6 max-w-lg">
          {toyDetails.details || toyDetails.description}
        </p>
        <div className="flex items-center gap-3">
          <div>
            <p>Seller: {toyDetails.sellerName || toyDetails.seller_name}</p>
          </div>
          <div>
            <p>Email: {toyDetails.sellerEmail || toyDetails.seller_email}</p>
          </div>
        </div>
        <div className="flex  items-center gap-3">
          <div>
            <p>Price: {toyDetails.price}</p>
          </div>
          <div>
            <p>
              Quantity: {toyDetails.quantity || toyDetails.available_quantity}
            </p>
          </div>
          <div>
            <p>Rating: {toyDetails.rating}</p>
          </div>
        </div>
        <button className="btn btn-danger my-5">Contact Seller</button>
      </div>
    </div>
  );
};

export default ToyCard;
