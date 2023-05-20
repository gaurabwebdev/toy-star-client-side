import React from "react";

const HeroCard = () => {
  return (
    <div className="ml-5 p-5  flex flex-col gap-5">
      <h2 className="text-4xl font-semibold ">Stylish Cars</h2>
      <p className="text-xl">Flat 10% Off On Order Above $29.99</p>
      <button className="btn btn-danger">Shop Now</button>
    </div>
  );
};

export default HeroCard;
