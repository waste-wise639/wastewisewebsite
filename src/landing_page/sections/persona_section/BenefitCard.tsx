import React from 'react';
import './BenefitCard.css';
import { FaCheckCircle } from 'react-icons/fa'; // Reusing the checkmark icon

// Define the shape of a single benefit item
interface BenefitItem {
  headline: string;
  description: string;
}

// Define the props for the BenefitCard component
interface BenefitCardProps {
  title: string;
  benefits: BenefitItem[];
  // You could also add an optional button prop if needed in future, e.g.:
  // buttonText?: string;
  // onButtonClick?: () => void;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, benefits }) => {
  return (
    <div className="benefit-card">
      <h3 className="benefit-card-title">{title}</h3>
      
      <ul className="benefit-items-list">
        {benefits.map((benefit, index) => (
          <li key={index} className="benefit-item">
            <FaCheckCircle className="benefit-check-icon" />
            <div className="benefit-text-content">
              <p className="benefit-headline">{benefit.headline}</p>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          </li>
        ))}
      </ul>
      {/* Optional button rendering: */}
      {/* {buttonText && onButtonClick && (
        <button className="benefit-card-button" onClick={onButtonClick}>{buttonText}</button>
      )} */}
    </div>
  );
};

export default BenefitCard;