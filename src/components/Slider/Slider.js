import { useState } from "react";
import style from "./Slider.module.css";
import arrow from "../../image/arrow.svg";

const Slider = ({ screenshots }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== screenshots.length - 1) {
      setSlideIndex((prevValue) => prevValue + 1);
    } else if (slideIndex === screenshots.length - 1) {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex((prevValue) => prevValue - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(screenshots.length - 1);
    }
  };

  return (
    <div className={style.container}>
      {screenshots.map((image, index) => (
        <div
          key={image.id}
          className={index === slideIndex ? style.activeSlide : style.slide}
        >
          <img
            src={image.image}
            className={style.screenshot}
            alt={`${image.id}screenshot`}
          />
        </div>
      ))}
      <button className={style.btnLeft} onClick={prevSlide}>
        <img src={arrow} className={style.leftArrow} alt="leftArrow" />
      </button>
      <button className={style.btnRight} onClick={nextSlide}>
        <img src={arrow} className={style.rightArrow} alt="rightArrow" />
      </button>
      <div className={style.dots}>
        {screenshots.map((item, index) => (
          <div
            key={`${item.id}dot`}
            onClick={() => setSlideIndex(index)}
            className={slideIndex === index ? style.dotActive : style.dot}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
