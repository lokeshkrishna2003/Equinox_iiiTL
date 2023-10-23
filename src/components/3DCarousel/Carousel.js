import React, { useState, useEffect } from 'react';
import LightEffectDiv from '../LightEffectDiv';
import './Carousel.css';

const Carousel = ({ images }) => {
    const [rotation, setRotation] = useState(0);
    const numOfImages = images.length;
    const angle = 360 / numOfImages;  // Angle based on number of images
  
    const handleNext = () => {
        setRotation(prevRotation => prevRotation - angle);
      };
    
      const handlePrev = () => {
        setRotation(prevRotation => prevRotation + angle);
      };

  useEffect(() => {
    const interval = setInterval(() => {
        handleNext();
      }, 3000); // Rotate every 3 seconds
      return () => clearInterval(interval);
      // eslint-disable-next-line
  }, []);

  return (
    <div className="carousel-container">
      <button onClick={handlePrev}>
        <LightEffectDiv>
        Previous
        </LightEffectDiv>
        </button>
      <div className="carousel" style={{ transform: `rotateY(${rotation}deg)` }}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            style={{ transform: `rotateY(${angle * index}deg) translateZ(400px)` }}
          />
        ))}
      </div>
      <button  onClick={handleNext}>
      <LightEffectDiv>
      Next
      </LightEffectDiv>
       </button>
    </div>
  );
};

export default Carousel;
