import React from "react";
import {
  GraduationCap,
  Activity,
  FileCheck,
  Shield,
  BookOpen,
  Users,
} from "lucide-react";

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
      Icon: Activity, // Replaced with a valid icon
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
    <div className="row" style={{ margin: "2rem"}}>
        <h1>Why Choose Us</h1>
      {features.map((feature, index) => (
        <div
          key={index}
          className="col-md-6 col-lg-4 col-sm-12 flex flex-col items-center gap-4 p-4"
        >
          <feature.Icon className="w-16 h-16 text-green-600 mb-4" />
          <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
          <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;

