import React from "react";
import "./Trainer.css"

const teamMembers = [
  {
    id: 1,
    name: "CAPTAIN NARESH KUMAR JOSHI (RETD) INDIAN NAVY",
    rank: "Ex-Deputy President/Interviewing Officer, 33 SSB Bhopal",
    additionalInfo: "",
    imgSrc: "18f381beee688ca960fc739e91ecb16d.jpg",
    altText: "Captain Naresh Kumar Joshi",
    link: "message-from-capt-naresh-joshi.php"
  },
  {
    id: 2,
    name: "GP.CAPT. SANGEETA KATHAIT.(VETERAN)",
    rank: "Ex. Psychologist, Air Force Selection Board Dehradun.",
    additionalInfo: "",
    imgSrc: "Best-NDA-Coaching-in-Dehradun-1.webp",
    altText: "Gp Capt Sangeeta Kathait",
    link: "gp-capt-sangeeta-kathait.php"
  },
  {
    id: 3,
    name: "WING COMMANDER MAHARAJ SINGH (EX-FLYING PILOT, AIR FORCE)",
    rank: "Ex-Senior GTO, Air Force Selection Board, Varanasi",
    additionalInfo: "",
    imgSrc: "download.jpeg",
    altText: "Wing Commander Maharaj Singh",
    link: "#"
  },
  {
    id: 4,
    name: "MR DEV NAGAR (EX-VICE PRINCIPAL ARMY SCHOOL)",
    rank: "Experienced Motivational &amp; Personality Development Trainer",
    additionalInfo: "",
    imgSrc: "NDA-and-TES-Common-Candidates-Notification.webp",
    altText: "Mr. Dev Nagar",
    link: "#"
  },
  {
    id: 5,
    name: "LT COL HARI BISHT (EX-ARMY)",
    rank: "Experienced Senior GTO",
    additionalInfo: "",
    imgSrc: "IdZGfm5kNDeFruOqGVTr.jpg",
    altText: "Lt Col Hari Bisht",
    link: "#"
  },
  {
    id: 6,
    name: "SQUADRON LEADER ANURADHA CHAUDHARY (EX-AIR FORCE)",
    rank: "Specialised in Personality Development",
    additionalInfo: "",
    imgSrc: "young-man-posing-casually-white-wall_1157-48200.jpg",
    altText: "Squadron Leader Anuradha Choudhary",
    link: "#"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Experts</h2>
        </div>

        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="col-xl-4 col-md-4 col-sm-11" data-aos="zoom-in" data-aos-delay={200 * (index + 1)}>
              <a href={member.link}>
                <div className="team-member">
                  <div className="member-img">
                    <img src={member.imgSrc} alt={member.altText} className="img-fluid" />
                  </div>
                  <div className="member-info">
                    <h4>{member.name}</h4>
                    <span>{member.rank}</span>
                    {member.additionalInfo && <span dangerouslySetInnerHTML={{ __html: member.additionalInfo }} />}
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
