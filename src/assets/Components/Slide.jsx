import React from "react";
import CustomCarousel from "./dynamicCrousel";

const Slide = () => {
  const items = [
    {
      image: "ce1ec1f1ef89f5bc15e30a2cba9b7069.avif",
      title: "Slide 1",
      description: "Description for slide 1",
    },
    {
      image: "Indian-Army-women-1.jpg",
      title: "Slide 2",
      description: "Description for slide 2",
    },
    {
      image: "IMG-20191206-WA0023.webp",
      title: "Slide 3",
      description: "Description for slide 3",
    },
    {
      image: "best-nda-coaching-in-india.jpg",
      title: "Slide 4",
      description: "Description for slide 4",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-10">
      <CustomCarousel items={items} />
    </div>
  );
};

export default Slide;