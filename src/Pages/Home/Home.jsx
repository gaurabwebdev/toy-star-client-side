import React from "react";
import HeroBanner from "./HeroBanner";
import FacilitySection from "./FacilitySection";
import GalleryImage from "./GalleryImage";
import CategorySection from "./CategorySection/CategorySection";
import ContactSection from "./Contact/ContactSection";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <FacilitySection />
      <GalleryImage />
      <CategorySection />
      <ContactSection />
    </div>
  );
};

export default Home;
