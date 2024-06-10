import React, { useEffect } from 'react';
import '../landingPage.css';

const StarAnimation = () => {
  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    [...Array(200)].forEach((_, i) => {
      const xDir = (Math.random() * 2 - 1).toFixed(4);
      const yDir = (Math.random() * 2 - 1).toFixed(4);
      const top = (Math.random() * 100).toFixed(2);
      const left = (Math.random() * 100).toFixed(2);
      const delay = (Math.random() * -20).toFixed(2);
      
      const rule = `
        .star:nth-child(${i + 1}) {
          --x-dir: ${xDir};
          --y-dir: ${yDir};
          top: ${top}%;
          left: ${left}%;
          animation-delay: ${delay}s;
        }
      `;
      
      styleSheet.insertRule(rule, styleSheet.cssRules.length);
    });
  }, []);

  return (
    <div className="star-container">
      {[...Array(100)].map((_, i) => (
        <div key={i} className="star" />
      ))}
    </div>
  );
};

export default StarAnimation;
