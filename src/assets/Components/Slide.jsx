import React from "react";
import CustomCarousel from "./dynamicCrousel";
import "./Slide.css";
import CounsellingSection from "./Councling";

const Slide = () => {
  const items = [
    {
      image: "FmAITB5acAABJmT (4)_1673634532.jpg",
      title: "Elite Training Programs",
      description: "Join our elite training programs designed to prepare you for the toughest challenges.",
    },
    {
      image: "nimbus-defence-academy-chandigarh-sector-34a-chandigarh-nda-institutes-9u6zs2lgmp.avif",
      title: "State-of-the-Art Facilities",
      description: "Experience world-class facilities and equipment to enhance your training.",
    },
    {
      image: "IMG-20191206-WA0023.webp",
      title: "Expert Instructors",
      description: "Learn from experienced instructors with years of military expertise.",
    },
    {
      image: "best-nda-coaching-in-india.jpg",
      title: "Comprehensive Curriculum",
      description: "Our comprehensive curriculum covers all aspects of military training and education.",
    },
  ];

  return (
<>
<div className="row max-w-5xl mx-auto p-2">
  <div className="col-md-6 col-lg-6 col-sm-12"><CustomCarousel items={items} /></div>
  <div className="col-md-6 col-lg-6  col-sm-12"><CounsellingSection/></div>
  </div>
</>
  );
};

export default Slide;
