import React, { useEffect, useState } from 'react'

// To get current dimensions
const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    // To update dimensions everytime it changes
    const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return windowDimensions;
}
