import React from "react";
import BenefitCard from "./BenefitCard"; // Import the reusable card
import "./WasteWiseBenefits.css"; // Main section specific styles

const WasteWiseBenefits: React.FC = () => {
  // Data for "For Households" benefits
  const householdBenefits = [
    {
      headline: "Clean, reliable waste pickup",
      description: "Never miss a collection day with scheduled reminders",
    },
    {
      headline: "Transparent pricing",
      description: "Know exactly what you're paying with no hidden fees",
    },
    {
      headline: "Recycle and earn rewards",
      description: "Get points for every recyclable item you collect",
    },
  ];

  // Data for "For Vendors" benefits
  const vendorBenefits = [
    {
      headline: "Access to new customers",
      description: "Expand your business with our growing user base",
    },
    {
      headline: "Digital payments and invoices",
      description: "Get paid faster with secure digital transactions",
    },
    {
      headline: "Scheduling & route optimization",
      description: "Save time and fuel with AI-powered route planning",
    },
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-header">
        <h1>Benefits <span style={{color:`var(--text-primary)`}}> for Everyone</span></h1>
      </div>

      <div className="benefits-cards-container">
        {/* Render BenefitCard for Households */}
        <BenefitCard title="For Households" benefits={householdBenefits} />

        {/* Render BenefitCard for Vendors */}
        <BenefitCard title="For Vendors" benefits={vendorBenefits} />
      </div>
    </section>
  );
};

export default WasteWiseBenefits;
