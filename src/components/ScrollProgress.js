import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const CircleContainer = styled.div`
    position: fixed;
    bottom: 2%;
    right: 2%;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.7);
    }
`;

const PercentageText = styled.span`
    position: absolute;
    color: #FFC300;
    font-size: 1.2rem;
    font-weight: bold;
    z-index: 10000;

    background:transparent;
`;

const ProgressRing = styled.svg`
    transform: rotate(-90deg);
    width: 100%;
    height: 100%;
`;

const ProgressBackground = styled.circle`
    fill: transparent;
    stroke: rgba(255, 255, 255, 0.1); 
    stroke-width: 6;
`;

const ProgressFill = styled.circle`
    fill: transparent;
    stroke: rgba(255, 195, 0, 0.6); // Adjusted opacity for a glassy appearance
    stroke-width: 6;
    stroke-dasharray: 219; 
    stroke-dashoffset: ${props => 219 - (props.$percentage * 219 / 100)};
`;

const ScrollProgress = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = Math.floor((window.scrollY / totalHeight) * 100);
        setScrollPosition(scrollPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <CircleContainer data-aos="fade-right">
            <ProgressRing>
                <ProgressBackground cx="50%" cy="50%" r="35" />
                <ProgressFill cx="50%" cy="50%" r="35" $percentage={scrollPosition} />
            </ProgressRing>
            <PercentageText>{scrollPosition}%</PercentageText>
        </CircleContainer>
    );
}

export default ScrollProgress;
