import React from "react";
import ImageGallery from "react-image-gallery";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
const GalleryImage = () => {
  const galleryImages = [
    {
      original: "https://i.ibb.co/7R4JPmh/gallery-Image-Two.jpg",
      thumbnail: "https://i.ibb.co/7R4JPmh/gallery-Image-Two.jpg",
    },
    {
      original: "https://i.ibb.co/yfqkW15/gallery-Image-Three.jpg",
      thumbnail: "https://i.ibb.co/yfqkW15/gallery-Image-Three.jpg",
    },
    {
      original: "https://i.ibb.co/CQNyDBG/gallery-Image-One.jpg",
      thumbnail: "https://i.ibb.co/CQNyDBG/gallery-Image-One.jpg",
    },
    {
      original: "https://i.ibb.co/CHJ8GCG/gallery-Image-Four.jpg",
      thumbnail: "https://i.ibb.co/CHJ8GCG/gallery-Image-Four.jpg",
    },
  ];
  return (
    <div className="m-10">
      <p className="text-4xl font-semibold mb-5 text-center">Our Toy Stars</p>
      <ImageGallery items={galleryImages} />
    </div>
  );
};

export default GalleryImage;
