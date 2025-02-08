import React from 'react';
import './CircularImage.css';  // Import the CSS file for styling

const CircularImage = ({ src, alt }) => {
  return (
    <div className="neon-border-container">
      <div className="circle">
        <img className="circle-image" src={src} alt={alt} />
      </div>
    </div>
  );
};

export default CircularImage;
