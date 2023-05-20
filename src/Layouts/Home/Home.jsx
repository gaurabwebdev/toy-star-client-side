import React from "react";
import HeroBanner from "./HeroBanner";
import FacilitySection from "./FacilitySection";
import GalleryImage from "./GalleryImage";
import CategorySection from "./CategorySection";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <FacilitySection />
      <GalleryImage />
      <CategorySection />
    </div>
  );
};

export default Home;
