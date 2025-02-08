import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

const CounterItem = ({ icon, count, caption, delay }) => (
  <div
    className="col-sm-6 col-md-4 col-lg-4 d-flex align-items-stretch"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="counter-wrap-2 d-flex w-100">
      <div className="icon" aria-label={`${caption} Icon`}>
        {icon}
      </div>
      <div className="text">
        <h2 className="number">
          <CountUp end={count} duration={20} />
        </h2>
        <span className="caption">{caption}</span>
      </div>
    </div>
  </div>
);

CounterItem.propTypes = {
  icon: PropTypes.node.isRequired,
  count: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
};

export default CounterItem;