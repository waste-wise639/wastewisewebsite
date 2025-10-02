// src/components/HowItWorksCard.tsx
import React from 'react';
import './HowItWorksCard.css'

// The icon is now just a string (the emoji)
interface HowItWorksCardProps {
    icon: string;
    stepNumber: number;
    title: string;
    description: string;
  }
  
  const HowItWorksCard: React.FC<HowItWorksCardProps> = ({
    icon,
    stepNumber,
    title,
    description,
  }) => {
    return (
      <div className="how-it-works-card">
        <div className="card-icon-wrapper">
          {/* Render the emoji string directly */}
          <span className="card-emoji-icon" role="img" aria-label={title}>
            {icon}
          </span>
        </div>
        <div className="card-step-number">{stepNumber}</div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    );
  };
  
  export default HowItWorksCard;