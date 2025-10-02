import React from "react";
import "./WasteWisePricing.css";
import { FaCheckCircle } from "react-icons/fa"; // Importing a checkmark icon from React Icons

const WasteWisePricing: React.FC = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h1>
          Simple, Transparent<span> Pricing</span>{" "}
        </h1>
        <p>Pay only for the service you need. No hidden fees.</p>
      </div>

      <div className="pricing-cards-container">
        {/* --- Household Pickup Card --- */}
        <div className="pricing-card">
          <h2 className="card-title">Household Pickup</h2>
          <p className="card-price">
            <span className="currency">₦</span>2,500
            <span className="frequency">/week</span>
          </p>

          <ul className="card-features-list">
            <li>
              <FaCheckCircle className="check-icon" /> Weekly waste collection
            </li>
            <li>
              <FaCheckCircle className="check-icon" /> Real-time tracking
            </li>
            <li>
              <FaCheckCircle className="check-icon" /> Recycling rewards
            </li>
            <li>
              <FaCheckCircle className="check-icon" /> 24/7 customer support
            </li>
          </ul>

          <button
            onClick={() => (window.location.href = "/join")}
            className="pricing-button primary-button"
          >
            Get Started
          </button>
        </div>

        {/* --- Vendor Subscription Card --- */}
        <div className="pricing-card">
          <h2 className="card-title">Vendor Subscription</h2>
          <p className="card-price">
            <span className="early-bird">Early Bird</span>
            <span className="frequency">/rate</span>
          </p>

          <ul className="card-features-list">
            <li>
              <FaCheckCircle className="check-icon" /> Priority customer access
            </li>
            <li>
              <FaCheckCircle className="check-icon" /> Digital payment
              processing
            </li>
            <li>
              <FaCheckCircle className="check-icon" /> Route optimization tools
            </li>
            <li>
              <FaCheckCircle className="check-icon" /> Marketing support
            </li>
            <li>
              <FaCheckCircle className="check-icon" /> Training & onboarding
            </li>
          </ul>

          <button
            onClick={() => (window.location.href = "/join")}
            className="pricing-button secondary-button"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default WasteWisePricing;
