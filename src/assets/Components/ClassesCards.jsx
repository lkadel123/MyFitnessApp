import React from "react";
import { Card, CardContent, Button, CardActions } from "@mui/material";
import Carousel from "./Carousel";
import "./ClassesCard.css";

const classesData = [
  {
    id: 1,
    title: "Army Training",
    images: ["navbharat-times-111652339.webp", "1-scaled.jpg", "gto12.jpg"],
    description:
      "Step into a world of discipline, courage, and honor. Experience rigorous training programs designed to build physical endurance, mental toughness, and leadership skills. Join the Indian Army and become a protector of the nation.",
    price: "₹9000",
    duration: "8 weeks",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Air Force Training",
    images: ["balaji-s-vertex-defence-academy-sikar-ho-sikar-air-force-training-centres-u3y153bbgb.avif", "navbharat-times-111652339.webp", "gto11.jpg"],
    description:
      "Unleash your potential with cutting-edge training programs of the Indian Air Force. From mastering advanced aviation technology to honing combat readiness, become part of an elite force protecting the skies and the nation. Your journey to greatness starts here.",
    price: "₹8000",
    duration: "12 weeks",
    level: "Advanced",
  },
  {
    id: 3,
    title: "Indian Navy Training",
    images: ["1-scaled.jpg", "20230626112808262cf483c0.jpg", "unnamed.jpg"],
    description:
      "Embark on an extraordinary journey with the Indian Navy. Through rigorous training on land, sea, and air, develop unparalleled skills in navigation, strategy, and leadership. Serve with pride as a defender of India's maritime frontiers.",
    price: "₹8400",
    duration: "10 weeks",
    level: "Intermediate",
  },
];

const FeaturedClass = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "16px",
        padding: "16px",
        paddingBottom: 0,
      }}
    >
      {classesData.map((classItem) => (
        <Card
          key={classItem.id}
          style={{
            maxWidth: "470px",
            width: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
          className="hover:transform scale-105 hover:shadow-xl"
        >
          <Carousel images={classItem.images} />
          <CardContent>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginBottom: "8px",
                color: "#333",
              }}
            >
              {classItem.title}
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#555", marginBottom: "16px" }}>
              {classItem.description}
            </p>
            <div style={{ marginBottom: "12px" }}>
              <span
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                color: "#333",
              }}
            >
              {classItem.price}
            </span>
            </div>
          </CardContent>
          <CardActions
            style={{
              justifyContent: "space-between",
              padding: "16px",
              paddingTop: "0",
            }}
          >
            <Button
              variant="contained"
              style={{
                background: "#271a0e",
                color: "#FFF",
                textTransform: "none",
                borderRadius: "8px",
                fontSize: "12px"
              }}
            >
              Learn More
            </Button>
              <div>            
                <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  color: "#222",
                  paddingRight: "12px"
                }}
              >
                {classItem.duration}
              </span>
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  color: "#000",
                }}
              >
                {classItem.level}
              </span>
              </div>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default FeaturedClass;
