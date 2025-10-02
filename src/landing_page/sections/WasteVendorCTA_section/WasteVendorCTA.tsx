import React from "react";
import "./WasteVendorCTA.css"; // Import the corresponding CSS file

const WasteVendorCTA: React.FC = () => {
  return (
    <div className="wastvenrocta-container">
      {/* Decorative background icons (represented here by classes) */}
      <div className="wastvenrocta-icon-top-left" aria-hidden="true">
        🗑️
      </div>
      <div className="wastvenrocta-icon-top-right" aria-hidden="true">
        🗑️
      </div>
      <div className="wastvenrocta-icon-bottom-left" aria-hidden="true">
        🗑️
      </div>
      <div className="wastvenrocta-icon-bottom-right" aria-hidden="true">
        🗑️
      </div>

      <div className="wastvenrocta-content">
        <h2 className="wastvenrocta-headline">
          Grow Your
          <span className="wastvenrocta-highlight"> Waste Business </span>
          <br />
          with WasteWise
        </h2>

        <p className="wastvenrocta-description">
          Join a network of verified waste vendors, get more customers, digital
          payments, and route optimization tools to boost your earnings.
        </p>

        <button
          className="wastvenrocta-button"
          onClick={() => (window.location.href = "/join")}
        >
          Join Vendor Network
        </button>
      </div>
    </div>
  );
};

export default WasteVendorCTA;
