import { type FC } from "react";
import "./person_section.css";

import disposerImage from "../../../assets/images/dump.png";
import vendorImage from "../../../assets/images/skid.png";

const disposerBenefits: string[] = [
  "✓ Clean, reliable waste pickup — Never miss a collection day with scheduled reminders.",
  "✓ Transparent pricing — Know exactly what you're paying with no hidden fees.",
  "✓ Recycle and earn rewards — Get points for every recyclable item you collect.",
];

const vendorBenefits: string[] = [
  "✓ Access to new customers — Expand your business with our growing user base.",
  "✓ Digital payments and invoices — Get paid faster with secure digital transactions.",
  "✓ Scheduling & route optimization — Save time and fuel with AI-powered route planning.",
];

const PersonaSection: FC = () => {
  return (
    <section className="persona-container">
      <div className="persona-title-group">
        <h2>WHO IS WASTE WISE FOR?</h2>
        <h1>
          <span>Benefits for Everyone</span> <br />
    
        </h1>
      </div>

      <div className="persona-card-grid">
        {/* Card 1: Waste Disposer */}
        <div className="persona-card disposer-card">
          <h3 className="persona-title">For Households</h3>

          <div className="bullet-points">
            {disposerBenefits.map((benefit, index) => (
              <span key={index} className="bullet-point">
                {benefit}
              </span>
            ))}
          </div>

          <img
            src={disposerImage}
            alt="Illustration of a full trash bag"
            className="card-image"
          />
        </div>

        {/* Card 2: Waste Vendor */}
        <div className="persona-card vendor-card">
          <h3 className="persona-title">For Vendors</h3>

          <img
            src={vendorImage}
            alt="Illustration of a large green dumpster"
            className="card-image"
          />

          <div className="bullet-points" style={{ marginTop: "2rem" }}>
            {vendorBenefits.map((benefit, index) => (
              <span key={index} className="bullet-point">
                {benefit}
              </span>
            ))}
          </div>

          <div className="vendor-cta">
            <button onClick={() => (window.location.href = "/join")}>
              Join our Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonaSection;
