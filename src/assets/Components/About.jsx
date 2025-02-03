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
                  About Me
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
                  Skills
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
                  Experience
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
                <h2 className="mb-4">My Story</h2>
                <p>
                  As a developer, my journey began with a passion for technology and problem-solving. Over the years, I've honed my skills in web and mobile development, constantly seeking new challenges and innovative solutions. Driven by creativity and a desire to make a meaningful impact, I strive to build intuitive, high-performance applications that connect users with technology in meaningful ways.
                </p>
                <h3 className="mb-4">
                  I Do Web Design &amp; Development since I was 18 Years Old
                </h3>
                <p>
                I've been passionate about web design and development since I was 18 years old. Over the years, I've immersed myself in creating innovative, user-centric solutions that seamlessly blend design and functionality. My journey has been driven by a love for technology and a constant pursuit of crafting digital experiences that stand out.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="skills"
                role="tabpanel"
                aria-labelledby="skills-tab"
              >
                <h2 className="mb-4">Skills</h2>
                <p>
                  Skilled in both web and mobile development, I specialize in creating responsive, efficient, and visually appealing websites and applications. With expertise in HTML, CSS, JavaScript, React, and more, I focus on delivering high-quality, user-friendly solutions that meet the needs of modern businesses and users.
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
                      title: "Art & Creative Director",
                      date: "2014-2015",
                      position: "Google Inc.",
                    },
                    {
                      title: "Wordpress Developer",
                      date: "2015-2017",
                      position: "Google Inc.",
                    },
                    {
                      title: "UI/UX Designer",
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