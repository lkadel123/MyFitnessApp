import React from "react";
import { Card, CardContent, Button } from "@mui/material";
import Carousel from "./Carousel";
import "./ClassesCard.css";
import FeaturesGrid from "./WhyChoose";

const classesData = [
  {
    id: 1,
    title: "Yoga Basics",
    images: ["navbharat-times-111652339.webp", "1-scaled.jpg", "gto12.jpg"],
    description: "Learn the basics of yoga to improve flexibility and relaxation."
  },
  {
    id: 2,
    title: "Advanced Coding",
    images: [ "balaji-s-vertex-defence-academy-sikar-ho-sikar-air-force-training-centres-u3y153bbgb.avif","navbharat-times-111652339.webp", "gto11.jpg"],
    description: "Master advanced coding techniques in this hands-on class."
  },
  {
    id: 3,
    title: "Photography 101",
    images: ["1-scaled.jpg", "20230626112808262cf483c0.jpg", "unnamed.jpg"],
    description: "Discover the art of photography and take stunning photos."
  },
  {
    id: 4,
    title: "Photography 101",
    images: ["1-scaled.jpg", "20230626112808262cf483c0.jpg", "unnamed.jpg"],
    description: "Discover the art of photography and take stunning photos."
  }
];

const FeaturedClass = () => {
  return (
    <>
        <div className="rows" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {classesData.map((classItem) => (
        <Card key={classItem.id} className="rounded-2xl shadow-lg col-md-5 col-sm-11 m-4">
          <Carousel images={classItem.images} />
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">{classItem.title}</h3>
            <p className="text-gray-600 mb-4">{classItem.description}</p>
            <Button variant="default" style={{ backgroundColor: "rgb(45, 55, 72)" }}>Learn More</Button>
          </CardContent>
        </Card>
      ))}
    </div>
    <FeaturesGrid />
    </>
  );
};

export default FeaturedClass;