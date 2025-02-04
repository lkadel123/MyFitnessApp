import React from "react";
import { Card, CardContent, Button  } from "@mui/material";
import { CalendarDays, Dumbbell, Heart } from "lucide-react";
import "./programs.css";
import MembershipOptions from "./membershipOption";

const programs = [
  {
    id: 1,
    name: "Yoga Sessions",
    icon: <Heart className="text-black" style={{ width: "32px", height: "32px" }}/>,
    description: "Relax and rejuvenate with our guided yoga sessions for all levels.",
    schedule: "Mon, Wed, Fri - 7:00 AM",
    instructor: "Emma Carter",
    difficulty: "Beginner",
  },
  {
    id: 2,
    name: "Strength Training",
    icon: <Dumbbell className="text-black" style={{ width: "32px", height: "32px" }} />,
    description: "Build strength with personalized training programs led by experts.",
    schedule: "Tue, Thu - 6:00 PM",
    instructor: "Jake Smith",
    difficulty: "Intermediate",
  },
  {
    id: 3,
    name: "Zumba Classes",
    icon: <CalendarDays className="text-black" style={{ width: "32px", height: "32px" }}/>,
    description: "Dance your way to fitness with energetic Zumba sessions.",
    schedule: "Sat - 10:00 AM",
    instructor: "Sophia Brown",
    difficulty: "All Levels",
  },
];

export default function FitnessParkPrograms() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="font-bold text-gray-800 mb-4 text-center">Fitness Park Programs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 responsive" style={{ display: "flex", justifyContent: "center", gap: "1rem", margin: " 0 2rem" }}>
        {programs.map((program) => (
          <Card key={program.id} className="feature-cards">
            <CardContent className="">
              <div className="flex items-center gap-2">
                {program.icon}
                <h3 className="font-bold text-gray" style={{size: "12px"}}>{program.name}</h3>
              </div>
              <p className="text-black mb-0">{program.description}</p>
              <p className="text-sm text-black  mb-0">
                <strong>Schedule:</strong> {program.schedule}
              </p>
              <p className="text-sm text-black mb-0">
                <strong>Instructor:</strong> {program.instructor}
              </p>
              <p className="text-sm text-black mb-0">
                <strong>Difficulty:</strong> {program.difficulty}
              </p>
              <Button className="mt-4 w-full text-white hover:bg-green-600" style={{ backgroundColor: "#2d3748" }}>
                Join Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <MembershipOptions/>
    </div>
  );
}