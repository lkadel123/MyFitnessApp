import React from "react";
import {
  GraduationCap,
  Activity,
  Shield,
} from "lucide-react";
import "./WhyChoose.css";

const FeaturesGrid = () => {
  const features = [
    {
      title: "Classroom Training",
      description: "Sessions to be conducted by Ex-officers, qualified engineers.",
      Icon: GraduationCap,
    },
    {
      title: "Physical Training",
      description: "Commandos for physical endurance building & training.",
      Icon: Activity,
    },
    {
      title: "Ex-Armed Forces Officers as Mentors",
      description:
        "You will undergo your training under mentorship of Ex Armed Forces Officers.",
      Icon: Shield,
    }
  ];

  return (
    <>    
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h1>WHY CHOOSE US</h1>
    </div>
    <div className="features-grid-container">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <feature.Icon className="feature-icon" />
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default FeaturesGrid;

