import React from "react";
import CounterSection from "./fatco";
import "./about.css"


const AboutSection = () => {
  return (
    <div className="container-xl">
      <div className="row g-xl-5">
        <div
          className="col-md-6 d-flex align-items-center"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className="img img-about"></div>
        </div>
        <div
          className="col-md-6 heading-section"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="my-5">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="aboutme-tab"
                  data-bs-toggle="tab"
                  href="#aboutme"
                  role="tab"
                  aria-controls="aboutme"
                  aria-selected="true"
                >
                  About
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="skills-tab"
                  data-bs-toggle="tab"
                  href="#skills"
                  role="tab"
                  aria-controls="skills"
                  aria-selected="false"
                >
                  Vision
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="experience-tab"
                  data-bs-toggle="tab"
                  href="#experience"
                  role="tab"
                  aria-controls="experience"
                  aria-selected="false"
                >
                  History
                </a>
              </li>
            </ul>
            <div className="tab-content py-4" id="myTabContent">
              <div
                className="tab-pane fade active show"
                id="aboutme"
                role="tabpanel"
                aria-labelledby="aboutme-tab"
              >
                <h2 className="mb-4">Our Story</h2>
                <p>
                At [Institute Name], our journey is fueled by a passion for skill development, problem-solving, and creating valuable learning experiences through practical training. Founded by an expert in NDA coaching, our institute aims to equip individuals with the physical and mental preparedness required to excel in the National Defence Academy exams and beyond.
                </p>
                <h3 className="mb-4">
                A Passion for &amp;  Comprehensive Training
                </h3>
                <p>
                Since the age of 18, our founder has dedicated themselves to training aspiring candidates for success in competitive exams, focusing on both physical fitness and written exam excellence. With a deep understanding of the demands of the NDA, they have crafted a holistic training approach that blends physical endurance, discipline, and strategic exam preparation.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="skills"
                role="tabpanel"
                aria-labelledby="skills-tab"
              >
                <h2 className="mb-4">Our Vision</h2>
                <p>
                At [Institute Name], our vision is to create a generation of disciplined, resilient, and highly skilled individuals who are fully prepared to succeed in the National Defence Academy exams and beyond. We aspire to be the leading institute that empowers students through rigorous physical training and comprehensive academic preparation, ensuring they are not only academically strong but also physically fit and mentally resilient. Our goal is to nurture future leaders who embody the values of integrity, perseverance, and excellence in all aspects of life.
                </p>
                <div className="row mt-5">
                  {[
                    { skill: "React", value: 80 },
                    { skill: "HTML / CSS", value: 95 },
                    { skill: "Javascript", value: 88 },
                    { skill: "asp.Net(MVC)", value: 89 },
                  ].map(({ skill, value }, index) => (
                    <div
                      className="col-lg-6"
                      key={skill}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay={100 * (index + 1)}
                    >
                      <div className="progress-wrap">
                        <h3>{skill}</h3>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={value}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: `${value}%` }}
                          >
                            <span>{value}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="experience"
                role="tabpanel"
                aria-labelledby="experience-tab"
              >
                <div className="row">
                  {[
                    {
                      title: "Established Date",
                      date: "2014-01-01",
                      position: "Google Inc.",
                    },
                    {
                      title: "Our Founder",
                      date: "2015-2017",
                      position: "Ram Krishnan lal tirpathi sharma ji",
                    },
                    {
                      title: "Our Journey",
                      date: "2018-2020",
                      position: "Google Inc.",
                    },
                  ].map(({ title, date, position }, index) => (
                    <div
                      className="col-md-12"
                      key={title}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay={400 + 100 * index}
                    >
                      <div className="resume-wrap d-flex align-items-stretch">
                        <div className="w-100">
                          <h2>{title}</h2>
                          <span className="date">{date}</span>{" "}
                          <span className="position">
                            <i className="ion-ios-pin me-2"></i>
                            {position}
                          </span>
                          <p>
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CounterSection/>
    </div>
  );
};

export default AboutSection;