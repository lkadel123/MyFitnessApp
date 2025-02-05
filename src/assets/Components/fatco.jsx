import React, { useEffect } from 'react';
import { FaUser, FaCheckCircle, FaCoffee } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CounterItem from './CounterItem'; // Assuming it's in the same folder
import './Fatco.css';

const CounterSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="ftco-section-counter">
      <div className="overlay"></div>
      <div className="container">
        <div className="row section-counter viewed">
          <CounterItem
            icon={<FaUser size="3rem" />}
            count={30}
            caption="Happy Customers"
            delay={100}
          />
          <CounterItem
            icon={<FaCheckCircle size="3rem" />}
            count={30}
            caption="Projects Completed"
            delay={200}
          />
          <CounterItem
            icon={<FaCoffee size="3rem" />}
            count={100}
            caption="Cups of Coffee"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
