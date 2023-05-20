import React from "react";
import HeroCard from "./HeroCard";

const HeroBanner = () => {
  return (
    <div className="border h-[500px] bg-blend-darken">
      <div className="w-full bg-[url('https://i.ibb.co/8bc9VJC/hero-image.jpg')] bg-cover bg-bottom h-full ">
        <div className="w-full h-full backdrop-brightness-110 flex items-center">
          <HeroCard />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
