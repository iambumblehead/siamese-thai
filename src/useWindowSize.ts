import React, { useState, useEffect } from 'react';

const win = typeof window === 'object' ? window : null;

const getWindowWH = () => (win ? [win.innerWidth, win.innerHeight] : [0, 0]);

const addEventListeners = (fn: () => void) => {
  win && win.addEventListener('resize', fn);
};

const removeEventListeners = (fn: () => void) => {
  win && win.removeEventListener('resize', fn);
};

export default function useWindowSize(): Array<number> {
  const [windowSize, setWindowSize] = useState(getWindowWH());

  useEffect((): ReturnType<React.EffectCallback> => {
    const handleResize = () => setWindowSize(getWindowWH());

    addEventListeners(handleResize);
    return (): void => removeEventListeners(handleResize);
  }, []);

  return windowSize;
}
