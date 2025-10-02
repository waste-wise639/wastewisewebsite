import React from 'react';
import './WasteWiseMission.css';

const WasteWiseMission: React.FC = () => {
  return (
    <section className="mission-section">
      <div className="mission-content">
        
        {/* The Mission Headline */}
        <h2 className="mission-headline">Our Mission</h2>
        
        {/* The Mission Statement */}
        <p className="mission-text">
          WasteWise is committed to transforming waste management in Africa. We empower households to live cleaner lives and help vendors grow sustainable businesses, reducing landfill waste and protecting our environment for future generations.
        </p>

        {/* Optional: Add a subtle green divider or icon to enhance the look */}
        <div className="mission-divider" aria-hidden="true"></div>
      </div>
    </section>
  );
};

export default WasteWiseMission;