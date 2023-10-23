import React, { useState } from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
overflow: hidden;

box-sizing: border-box;
    padding: 20px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.07);  // very slight transparent white
    backdrop-filter: blur(2px);  // increased blur for more pronounced glass effect
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5) inset, 0 0 10px rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);

    // Spotlight effect
    &::after {
        // content: '';
        // position: absolute;
        // top: 0;
        // left: 0;
        // width: 200%;  
        // height: 200%;
        // background: radial-gradient(circle closest-side, rgba(255, 255, 255, 0.15), transparent 60%);
        // pointer-events: none; 
        // transform: translate(-50%, -50%);
        // mix-blend-mode: screen;
    }

    
    &:hover {
        transform: scale(1.05) rotateX(5deg) rotateY(5deg); /* Subtle zoom and 3D tilt */
    background: rgba(34, 34, 34, 0.7);  /* Slightly darker on hover */
    }

`;

const LightEffectDiv = ({ children }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setPosition({
            x: x,
            y: y
        });
    };

    return (
        <StyledDiv 
            onMouseMove={handleMouseMove} 
            style={{
                transform: `rotateX(${(position.y / window.innerHeight - 0.5) * 15}deg) rotateY(${(position.x / window.innerWidth - 0.5) * 15}deg)`,
                '--x': `${position.x}px`,
                '--y': `${position.y}px`
            }}
        >
            {children}
        </StyledDiv>
    );
}

export default LightEffectDiv;
