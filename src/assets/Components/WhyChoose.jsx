import React from "react";
import {
  GraduationCap,
  Activity,
  FileCheck,
  Shield,
  BookOpen,
  Users,
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
      title: "Offline & Online Exams",
      description: "Mock tests & paper solving will be conducted in the classroom.",
      Icon: FileCheck,
    },
    {
      title: "Ex-Armed Forces Officers as Mentors",
      description:
        "You will undergo your training under mentorship of Ex Armed Forces Officers.",
      Icon: Shield,
    },
    {
      title: "Library & Reading Facility",
      description: "Library and reading facility is available from 9 am to 8 pm.",
      Icon: BookOpen,
    },
    {
      title: "Leadership & Team Building",
      description: "Leadership & team building through sports activities.",
      Icon: Users,
    },
  ];

  return (
    <>    
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h1>Why Choose Us</h1>
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

