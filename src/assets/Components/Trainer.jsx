import React, { useEffect } from "react";
import "./Trainer.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure you have AOS styles imported

const teamMembers = [
  {
    id: 1,
    name: "CAPTAIN NARESH KUMAR JOSHI (RETD) INDIAN NAVY",
    rank: "Ex-Deputy President/Interviewing Officer, 33 SSB Bhopal",
    imgSrc: "18f381beee688ca960fc739e91ecb16d.jpg",
    altText: "Captain Naresh Kumar Joshi",
    link: "message-from-capt-naresh-joshi.php"
  },
  {
    id: 2,
    name: "GP.CAPT. SANGEETA KATHAIT.(VETERAN)",
    rank: "Ex. Psychologist, Air Force Selection Board Dehradun.",
    imgSrc: "Best-NDA-Coaching-in-Dehradun-1.webp",
    altText: "Gp Capt Sangeeta Kathait",
    link: "gp-capt-sangeeta-kathait.php"
  },
  {
    id: 3,
    name: "WING COMMANDER MAHARAJ SINGH (EX-FLYING PILOT, AIR FORCE)",
    rank: "Ex-Senior GTO, Air Force Selection Board, Varanasi",
    imgSrc: "download.jpeg",
    altText: "Wing Commander Maharaj Singh",
    link: "#"
  },
  {
    id: 4,
    name: "MR DEV NAGAR (EXPRINCIPAL ARMY SCHOOL)",
    rank: "Personality Development Trainer, 33 SSB Bhopal",
    imgSrc: "NDA-and-TES-Common-Candidates-Notification.webp",
    altText: "Mr. Dev Nagar",
    link: "#"
  }
];

const TeamSection = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="team" className="team">
      <div className="p-7" data-aos="fade-up" style={{ margin: "1.4rem" }}>
        <div className="section-header">
          <h1>OUR EXPERTS</h1>
        </div>

        <div className="row">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="col-xl-4 col-md-4 col-sm-11"
              data-aos="zoom-in"
              data-aos-delay={200 * (index + 1)}
            >
              <a href={member.link}>
                <div className="team-member-card">
                  <div className="member-img">
                    <img
                      src={member.imgSrc}
                      alt={member.altText}
                      className="img-fluid"
                    />
                  </div>
                  <div className="member-info">
                    <h6 className="text-black">{member.name}</h6>
                    <span>{member.rank}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

