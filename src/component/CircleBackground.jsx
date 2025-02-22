// CircleBackground.js
import React, { useEffect, useRef } from 'react';
import './style.css';

const CircleBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const createCircle = () => {
      const circle = document.createElement('div');
      circle.classList.add('circle');

      const size = Math.random() * 50 + 20; // Random size between 20px and 70px
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;

      const xStart = Math.random() * window.innerWidth;
      const yStart = Math.random() * window.innerHeight;
      circle.style.left = `${xStart}px`;
      circle.style.top = `${yStart}px`;

      const xEnd = (Math.random() - 0.5) * 2 * window.innerWidth;
      const yEnd = (Math.random() - 0.5) * 2 * window.innerHeight;
      circle.style.setProperty('--x-end', `${xEnd}px`);
      circle.style.setProperty('--y-end', `${yEnd}px`);

      const duration = Math.random() * 10 + 10; // Random duration between 10s and 20s
      circle.style.animationDuration = `${duration}s`;

      container.appendChild(circle);

      circle.addEventListener('animationiteration', () => {
        circle.remove();
        createCircle();
      });
    };

    for (let i = 0; i < 20; i++) {
      createCircle();
    }
  }, []);

  return <div ref={containerRef} className="circle-container"></div>;
};

export default CircleBackground;