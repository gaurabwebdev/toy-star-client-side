import React from "react";

const ToyCard = ({ toyDetails }) => {
  const {
    photoURL,
    price,
    quantity,
    rating,
    sellerEmail,
    sellerName,
    sub_category,
    toyName,
    details,
  } = toyDetails;
  return (
    <div className="flex flex-col lg:flex-row-reverse my-8 mx-12">
      <div className="w-full lg:w-1/2 m-10">
        <img src={photoURL} className="rounded-lg shadow-2xl mx-auto" />
      </div>

      <div className="w-full lg:w-1/2 m-10">
        <h1 className="text-5xl font-bold">{toyName}</h1>
        <p className="py-6 max-w-lg">{details}</p>
        <div className="flex items-center gap-3">
          <div>
            <p>Seller: {sellerName}</p>
          </div>
          <div>
            <p>Email: {sellerEmail}</p>
          </div>
        </div>
        <div className="flex  items-center gap-3">
          <div>
            <p>Price: {price}</p>
          </div>
          <div>
            <p>Quantity: {quantity}</p>
          </div>
          <div>
            <p>Rating: {rating}</p>
          </div>
        </div>
        <button className="btn btn-danger my-5">Contact Seller</button>
      </div>
    </div>
  );
};

export default ToyCard;
