import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./dynamicCrousel.css";

function CustomCarousel({ items = [], autoplayInterval = 7000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  // Autoplay functionality
  useEffect(() => {
    if (autoplayInterval) {
      const intervalId = setInterval(nextSlide, autoplayInterval);
      return () => clearInterval(intervalId); // Clean up interval on component unmount
    }
  }, [currentIndex, autoplayInterval]);

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel-slide">
        <div className="carousel-image-container">
          <img
            src={items[currentIndex].image}
            alt={items[currentIndex].title}
            className="carousel-image"
          />
          <div className="carousel-text">
            <h3 className="carousel-title" style={{ color: "white" }}>
              {items[currentIndex].title}
            </h3>
            <p className="carousel-description">{items[currentIndex].description}</p>
          </div>
        </div>
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

CustomCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  autoplayInterval: PropTypes.number,
};

export default CustomCarousel;

