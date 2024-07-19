import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { HeroData } from '../../data/data';
import './Hero.css';

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const length = HeroData.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 7000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const selectSlide = (index) => {
    if(timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(index);
  };

  return (
    <div 
      className={`hero-section ${HeroData[current].customClass || ''}`} 
      style={{ backgroundImage: `url(${HeroData[current].image})` }}
    >
      <div className="hero-wrapper">
        <div className="hero-slider">
          <div className="hero-content">
            <h1>{HeroData[current].title}</h1>
            <h2>{HeroData[current].h2}</h2>
            <div className="button-container">
              {HeroData[current].buttons.map((button, index) => (
                <a key={index} href={button.link} className="hero-button">
                  {button.text}
                </a>
              ))}
            </div>
          </div>
        </div>
        <IoIosArrowBack className="arrow-buttons prev" onClick={prevSlide} />
        <IoIosArrowForward className="arrow-buttons next" onClick={nextSlide} />
        <div className="dots">
          {HeroData.map((_, index) => (
            <span
              key={index}
              className={`dot ${current === index ? 'active' : ''}`}
              onClick={() => selectSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
