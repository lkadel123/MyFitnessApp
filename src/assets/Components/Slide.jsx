import React from "react";
import CustomCarousel from "./dynamicCrousel";
import "./Slide.css";

const Slide = () => {
  const items = [
    {
      image: "FmAITB5acAABJmT (4)_1673634532.jpg",
      title: "Slide 1",
      description: "Description for slide 1",
    },
    {
      image: "nimbus-defence-academy-chandigarh-sector-34a-chandigarh-nda-institutes-9u6zs2lgmp.avif",
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
<>
<div className="max-w-5xl mx-auto py-10">
      <CustomCarousel items={items} />
    </div>
        <div className="overflow-hidden whitespace-nowrap bg-green-100 py-2">
        <a
          href="registration-form.php"
          className="inline-block text-lg text-green-800 font-semibold animate-marquee"
        >
          Admissions Open for Session 2025-26. Limited Seats. Apply Now.
        </a>
      </div>
</>
  );
};

export default Slide;