import { useEffect, useState } from "react";
import classes from "./MySlider.module.css";

export default function MySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [time, setTime] = useState(0);

  const slides = ["piku", "tiku", "minu"];

  const handlePrev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div className={classes.sliderContainer}>
      <h2>Slider Section</h2>
      <h3 className={classes.slide}>{slides[currentSlide]}</h3>

      {/* button----------------> */}
      <button className="prev" onClick={handlePrev}>
        Prev
      </button>
      <button className="next" onClick={handleNext}>
        Next
      </button>
      {/* <----------------button */}
    </div>
  );
}
