import React, { useState } from 'react';
import Preloader from './components/Preloader';
import HomePage from './components/HomePage/HomePage';
import ScrollIndicator from './components/ScrollIndicator';

import './App.css'

const App = () => {
    const [shouldDisplay3DScene, setShouldDisplay3DScene] = useState(true);
    const [fadeOpacity, setFadeOpacity] = useState(0);

    const handleCameraPositionChange = (cameraZPosition) => {
        const THRESHOLD = 3;

        if (cameraZPosition < THRESHOLD) {
            let newOpacity = fadeOpacity + 1; // Gradually increase the opacity
            if (newOpacity >= 1) {
                newOpacity = 1;
                setShouldDisplay3DScene(false);
                
            }
            setFadeOpacity(newOpacity);
        }
    };

    return (
        <div>

            {shouldDisplay3DScene ? <Preloader key='preloader' onCameraPositionChange={handleCameraPositionChange} /> : <HomePage />}
            {shouldDisplay3DScene && 
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'black',
                    opacity: fadeOpacity,
                    pointerEvents: 'none',
                    transition: 'opacity 0.3s',
                    
                }} />
            }
        
            {shouldDisplay3DScene && <ScrollIndicator   />}
        </div>
    );
};

export default App;
