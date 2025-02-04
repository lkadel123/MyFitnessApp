import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import "./Carousel.css";

const Carousel = ({ images, autoplayInterval }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  
  React.useEffect(() => {
    if (autoplayInterval) {
      const intervalId = setInterval(nextSlide, autoplayInterval);
      return () => clearInterval(intervalId); 
    }
  }, [currentIndex, autoplayInterval]);

  return (
    <div className="carousel-containers col-md-3 col-sm-11">
      <motion.img
        key={images[currentIndex]}
        src={images[currentIndex]}
        alt="carousel slide"
        className="carousel-images"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
      <div>
        <button
          onClick={prevSlide}
          className="carousel-button carousel-button-left"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="carousel-button carousel-button-right"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

Carousel.defaultProps = {
  autoplayInterval: 3000, 
};

export default Carousel;
