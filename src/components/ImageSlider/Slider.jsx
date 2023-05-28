import React, { useState, useEffect } from "react";

import image1 from "../../assests/Doraemon1.png";
import image2 from "../../assests/Nobita.webp";
import image3 from "../../assests/shijuka.webp";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [image1, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  return (
    <div>
      <button onClick={prevSlide}>Previous</button>
      <img src={images[currentSlide]} height={300} />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}

export default Slider;
