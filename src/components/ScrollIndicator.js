import React from 'react';
import styled, { keyframes } from 'styled-components';


// Keyframes for the scrolldown animation
const scrolldown = keyframes`
  0%{
    transform: translateY(20%) rotate(45deg);
    opacity: 0.7;
  }
  50%{
    transform: translateY(0%) rotate(45deg);
    opacity: 0.2;
  }
  100%{
    transform: translateY(20%) rotate(45deg);
    opacity: 0.7;
  }
`;

const Arrow = styled.div`
  width: 2em;
  height: 2em;
  position: fixed;
  background-color: transparent;
  z-index: 80;
  bottom: ${props => props.offset || '25px'};
  left: 50%;
  transform: translateY(0%) rotate(45deg);
  border-width: 0 0.25em 0.25em 0;
  border-style: solid;
  border-color: antiquewhite;
  animation: ${scrolldown} 1.2s ease-in-out infinite ${props => props.$delay || '0s'};
`;

const ScrollText = styled.span`
    position: fixed;
    bottom: 60px;  // adjust this value to place it just above the scroll indicator
    left: 49.3%;
    transform: translateX(-50%);
    color: #FFF;
    font-size: 1.2rem;
    font-weight: bold;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);  // gives a glowing effect
    opacity: 0.7;
    transition: opacity 0.3s, transform 0.3s;
    cursor: pointer;

    &:hover {
        opacity: 1;
        transform: translateX(-50%) scale(1.1);
    }
`;

const ScrollIndicator = () => {
  return (
    <>
      <ScrollText data-aos="fade-up">Scroll</ScrollText>
      <Arrow offset="25px" $delay="0.15s" data-aos="fade-in" />
      <Arrow offset="40px" data-aos="fade-in"/>
    </>
  );
}

export default ScrollIndicator;
