import React, { useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { FaCoffee } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Fatco.css'

const CounterSection = () => {
 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className="ftco-section-counter"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row section-counter viewed">

          <div className="col-sm-6 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div
              className="counter-wrap-2 d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon">
              <FaUser size="3rem"/>
              </div>
              <div className="text">
                <h2 className="number">
                  <span className="countup">30</span>
                </h2>
                <span className="caption">Happy Customers</span>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div
              className="counter-wrap-2 d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon">
              <FaCheckCircle size="3rem"/>
              </div>
              <div className="text">
                <h2 className="number">
                  <span className="countup">30</span>
                </h2>
                <span className="caption">Projects Completed</span>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div
              className="counter-wrap-2 d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon ">
              <FaCoffee size="3rem"/>
              </div>
              <div className="text">
                <h2 className="number">
                  <span className="countup">100</span>
                </h2>
                <span className="caption">Cups of Coffee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
