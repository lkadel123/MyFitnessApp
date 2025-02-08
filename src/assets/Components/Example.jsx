import React, { useRef, useState } from 'react';
import { CardContent, Button } from "@mui/material";
import { CalendarDays, Dumbbell, Heart } from "lucide-react";
import './Example.css';
import MembershipOptions from './membershipOption';

const programs = [
  {
    id: 1,
    name: "Yoga Sessions",
    icon: <Heart className="text-black" style={{ width: "32px", height: "32px" }} />,
    description: "Relax and rejuvenate with our guided yoga sessions for all levels.",
    schedule: "Mon, Wed, Fri - 7:00 AM",
    instructor: "Emma Carter",
    difficulty: "Beginner",
  },
  {
    id: 1,
    name: "Yoga Sessions",
    icon: <Heart className="text-black" style={{ width: "32px", height: "32px" }} />,
    description: "Relax and rejuvenate with our guided yoga sessions for all levels.",
    schedule: "Mon, Wed, Fri - 7:00 AM",
    instructor: "Emma Carter",
    difficulty: "Beginner",
  },
  {
    id: 1,
    name: "Yoga Sessions",
    icon: <Heart className="text-black" style={{ width: "32px", height: "32px" }} />,
    description: "Relax and rejuvenate with our guided yoga sessions for all levels.",
    schedule: "Mon, Wed, Fri - 7:00 AM",
    instructor: "Emma Carter",
    difficulty: "Beginner",
  },
  {
    id: 1,
    name: "Yoga Sessions",
    icon: <Heart className="text-black" style={{ width: "32px", height: "32px" }} />,
    description: "Relax and rejuvenate with our guided yoga sessions for all levels.",
    schedule: "Mon, Wed, Fri - 7:00 AM",
    instructor: "Emma Carter",
    difficulty: "Beginner",
  },  
];

const TiltCard = () => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const ROTATION_RANGE = 7.4;
  const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rx = (mouseY / height - HALF_ROTATION_RANGE);
    const ry = (mouseX / width - HALF_ROTATION_RANGE);

    setTilt({ x: ry, y: rx });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="">
    <div className="row gap-4 m-2" style={{ placeItems:"center"}}>
      {programs.map((program) => (
        <div
          key={program.id}
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="card-wrapper col-sm-12 col-md-4"
          style={{
            '--tilt-x': `${tilt.x}deg`,
            '--tilt-y': `${tilt.y}deg`,
          }}
        >
          <div className="card-inner">
            <CardContent>
              <div className="flex items-center gap-2">
                {program.icon}
                <h3 className="font-bold text-gray-800">{program.name}</h3>
              </div>
              <p className="text-black mb-0">{program.description}</p>
              <p className="text-sm text-black mb-0">
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
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TiltCard;