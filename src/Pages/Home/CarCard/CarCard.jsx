import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ carinfo }) => {
  const { toy_name, price, rating, picture_url, _id } = carinfo;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={picture_url}
          alt="toy-photo"
          className="rounded-xl w-full h-64"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{toy_name}</h2>
        <p>{price}</p>
        <p>{rating}</p>
        <div className="card-actions">
          <Link to={`/alltoys/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
